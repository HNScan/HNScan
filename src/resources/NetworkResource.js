import { Resource } from "rest-hooks";

export default class NetworkResource extends Resource {
  network = null;
  chainWork = null;
  difficulty = null;
  hashrate = null;
  unconfirmed = null;
  unconfirmedSize = null;
  // TODO: totalNames

  pk() {
    return null;
  }

  static urlRoot = "http://localhost:8080/summary";
}
