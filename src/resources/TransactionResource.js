import { Resource } from "rest-hooks";

export default class TransactionResource extends Resource {
  txid = "";
  hash = "";
  size = null;
  vsize = null;
  version = null;
  locktime = null;
  inputs = null;
  outputs = null;
  blockhash = null;
  confirmations = null;
  time = null;
  blocktime = null;
  fee = null;

  pk() {
    return this.hash;
  }

  static urlRoot = `${process.env.REACT_APP_API_URL}/txs/`;

  static listShape() {
    return {
      ...super.listShape(),
      schema: { result: [this.getEntitySchema()] }
    };
  }
}
