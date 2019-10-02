import { Resource } from "rest-hooks";

export default class BlockResource extends Resource {
  id = null;
  addr = null;
  addrlocal = null;
  name = null;
  services = null;
  relaytxes = null;
  lastsend = null;
  lastrecv = null;
  bytessent = null;
  bytesrecv = null;
  conntime = null;
  timeoffset = null;
  pingtime = null;
  minping = null;
  version = null;
  subver = null;
  inbound = null;
  startingheight = null;
  besthash = null;
  bestheight = null;
  banscore = null;
  inflight = null;
  whitelisted = null;

  pk() {
    return this.id;
  }

  static urlRoot = `${process.env.REACT_APP_API_URL}/peers/`;

  static listShape() {
    return {
      ...super.listShape(),
      schema: { result: [this.getEntitySchema()] }
    };
  }
}
