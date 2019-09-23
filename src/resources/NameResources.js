import { Resource } from "rest-hooks";

export default class NameResource extends Resource {
  name = "";
  start = ""; //@todo not sure best type here.
  reserved = false;
  state = "";
  nextState = "";
  blocksUntilNextState = "";
  nameHash = "";
  height = null;
  renewal = null;
  value = null;
  highest = null;
  weak = false;
  transfer = null;
  revoked = null;
  records = null; //@todo ideally vet this out further.
  history = null; //@todo vet this out futher into types. This contains transactions, we can be cached.

  pk() {
    return this.name;
  }

  static urlRoot = "http://localhost/names/";
}
