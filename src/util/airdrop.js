//Most of these functions are from the following file: https://github.com/handshake-org/hs-airdrop/blob/master/bin/hs-airdrop
//
const bech32 = require("bstring/lib/bech32");
const assert = require("bsert");
const fs = require("bfile");
const sha256 = require("bcrypto/lib/sha256");
const Path = require("path");
const os = require("os");
const bio = require("bufio");
const merkle = require("bcrypto/lib/mrkl");
const request = require("brq");
const blake2b = require("bcrypto/lib/blake2b");

const { AirdropKey, AirdropProof } = require("hs-airdrop");

const tree = require("hs-airdrop/etc/tree.json");
const faucet = require("hs-airdrop/etc/faucet.json");

const {
  checksum: TREE_CHECKSUM,
  leaves: TREE_LEAVES,
  keys: TREE_KEYS,
  checksums: TREE_CHECKSUMS,
  reward: TREE_REWARD
} = tree;

const { checksum: FAUCET_CHECKSUM, leaves: FAUCET_LEAVES } = faucet;

const PROOF_CHECKSUM =
  "515884a61a5f4e06b6a580d2bbc7c12b526ee1c5616009c4ca21056af6b0d62c";
const GITHUB_URL = "https://github.com/handshake-org/hs-tree-data/raw/master";
const BUILD_DIR =
  process.env.BUILD_DIR || Path.resolve(os.homedir(), ".hs-tree-data");
const NONCE_DIR = Path.resolve(BUILD_DIR, "nonces");

async function readFaucetFile() {
  return readFile("faucet.bin", FAUCET_CHECKSUM);
}

async function readFaucetLeaves() {
  const data = await readFaucetFile();
  const br = bio.read(data);
  const totalLeaves = br.readU32();
  const leaves = [];

  for (let i = 0; i < totalLeaves; i++) {
    const hash = br.readBytes(32);
    leaves.push(hash);
  }

  assert.strictEqual(br.left(), 0);
  assert.strictEqual(totalLeaves, FAUCET_LEAVES);

  return leaves;
}

function findFaucetLeaf(leaves, target) {
  assert(Array.isArray(leaves));
  assert(Buffer.isBuffer(target));

  // Could do a binary search here.
  for (let i = 0; i < leaves.length; i++) {
    const leaf = leaves[i];

    if (leaf.equals(target)) return i;
  }

  return -1;
}

async function readFile(...path) {
  if (!(await fs.exists(BUILD_DIR))) await fs.mkdir(BUILD_DIR, 0o755);

  if (!(await fs.exists(NONCE_DIR))) await fs.mkdir(NONCE_DIR, 0o755);

  const checksum = Buffer.from(path.pop(), "hex");
  const file = Path.resolve(BUILD_DIR, ...path);
  const base = Path.basename(file);

  if (!(await fs.exists(file))) {
    const url = `${GITHUB_URL}/${path.join("/")}`;

    console.log("Downloading: %s...", url);

    const req = await request({
      url,
      limit: 50 << 20,
      timeout: 600 * 1000
    });

    const raw = req.buffer();

    if (!sha256.digest(raw).equals(checksum))
      throw new Error(`Invalid checksum: ${base}`);

    await fs.writeFile(file, raw);

    return raw;
  }

  const raw = await fs.readFile(file);

  if (!sha256.digest(raw).equals(checksum))
    throw new Error(`Invalid checksum: ${base}`);

  return raw;
}

async function createProof(key, priv, bare = false) {
  assert(key instanceof AirdropKey);
  assert(typeof bare === "boolean");

  if (key.isAddress()) {
    const leaves = await readFaucetLeaves();
    const index = findFaucetLeaf(leaves, key.hash());

    if (index === -1) throw new Error("Could not find leaf.");

    console.log("Creating proof from leaf...");

    const proof = merkle.createBranch(blake2b, index, leaves);
    const p = new AirdropProof();

    p.index = index;
    p.proof = proof;
    p.key = key.encode();

    return p;
  }

  const leaves = await readLeaves();

  assert(priv);

  console.log("Decrypting nonce...");

  const nonce = await findNonce(key, priv);

  if (bare) key.applyNonce(nonce);
  else key.applyTweak(nonce);

  console.log("Finding merkle leaf...");

  const [index, subindex] = findLeaf(leaves, key.hash());

  if (index === -1) throw new Error("Could not find leaf.");

  console.log("Creating proof from leaf...");

  const subtree = leaves[index];
  const subproof = merkle.createBranch(blake2b, subindex, subtree);

  const tree = flattenLeaves(leaves);
  const proof = merkle.createBranch(blake2b, index, tree);

  const p = new AirdropProof();

  p.index = index;
  p.proof = proof;
  p.subindex = subindex;
  p.subproof = subproof;
  p.key = key.encode();

  return p;
}

async function readProofFile() {
  const raw = await readFile("proof.json", PROOF_CHECKSUM);
  return JSON.parse(raw.toString("utf8"));
}

async function findProofEntry(addr) {
  const target = parseAddress(addr);
  const items = await readProofFile();

  for (const [address, value, sponsor] of items) {
    const { hash } = parseAddress(address);

    if (hash.equals(target.hash)) return [value, sponsor];
  }

  throw new Error("Address is not a faucet or sponsor address.");
}

async function calculateProof(addr) {
  let value;
  let sponsor;

  try {
    [value, sponsor] = await findProofEntry(addr);
  } catch (e) {
    console.log(e);
  }

  key = {
    type: "addr",
    pub: AirdropKey.fromAddress(addr, value, sponsor),
    priv: null
  };

  let fee = sponsor ? 500e6 : 100e6;

  const address = parseAddress(addr);

  // const proof = await createProof(key.pub, key.priv, bare);
  const proof = await createProof(key.pub, key.priv, false);

  proof.version = address.version;
  proof.address = address.hash;
  proof.fee = fee;

  if (fee > proof.getValue()) throw new Error("Fee exceeds value!");

  if (key.priv) proof.sign(key.pub, key.priv);

  if (!proof.verify()) throw new Error("Proof failed verification.");

  return proof.toBase64();
}

/*
 *
 * Helpers
 *
 */

function parseAddress(addr) {
  const address = bech32.decode(addr);

  if (address.hrp !== "hs" && address.hrp !== "ts" && address.hrp !== "rs") {
    throw new Error("Invalid address HRP.");
  }

  if (address.version !== 0) throw new Error("Invalid address version.");

  if (address.hash.length !== 20 && address.hash.length !== 32) {
    throw new Error("Invalid address.");
  }

  return address;
}

module.exports = {
  calculateProof: calculateProof,
  parseAddress: parseAddress
};
