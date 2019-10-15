import { Resource } from "rest-hooks";

export default class BlockResource extends Resource {
  hash = "";
  confirmations = null;
  strippedSize = null;
  size = null;
  weight = null;
  height = null;
  version = null;
  merkleRoot = "";
  witnessRoot = "";
  treeRoot = "";
  filterRoot = "";
  reservedRoot = "";
  coinbase = null;
  tx = null;
  txs = null;
  fees = null;
  miner = null;
  averageFee = null;
  time = null;
  medianTime = null;
  bits = null;
  difficulty = null;
  chainwork = null;
  prevBlock = "";
  nextHash = null;
  nonce = "";

  pk() {
    return this.height;
  }

  static urlRoot = `${process.env.REACT_APP_API_URL}/blocks/`;

  static listShape() {
    return {
      ...super.listShape(),
      schema: { result: [this.getEntitySchema()] }
    };
  }
}
