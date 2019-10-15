import { Resource } from "rest-hooks";

export default class NameResource extends Resource {
  name = "";
  release = null; //@todo not sure best type here.
  reserved = false;
  state = "";
  nextState = "";
  blocksUntil = null;
  nameHash = "";
  height = null;
  renewal = null;
  value = null;
  highest = null;
  weak = false;
  transfer = null;
  revoked = null;
  records = null; //@todo ideally vet this out further.
  owner = null; //@todo put this into Name Advanced.

  pk() {
    return this.name;
  }

  static urlRoot = `${process.env.REACT_APP_API_URL}/names/`;

  static listShape() {
    return {
      ...super.listShape(),
      schema: { result: [this.getEntitySchema()] }
    };
  }
}
