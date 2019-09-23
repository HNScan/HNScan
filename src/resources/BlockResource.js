import { Resource } from "rest-hooks";

export default class BlockResource extends Resource {
  bits = null;
  depth = null;
  filterRoot = "";
  hash = "";
  height = null;
  merkleRoot = "";
  nonce = "";
  prevBlock = "";
  reservedRoot = "";
  time = null;
  treeRoot = "";
  txs = null;
  version = null;
  witnessRoot = "";

  pk() {
    return this.height;
  }

  static urlRoot = "http://localhost:8080/blocks/";
}
