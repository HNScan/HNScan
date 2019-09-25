import { Resource } from "rest-hooks";

export default class NetworkResource extends Resource {
  network = null;
  chainWork = null;
  difficulty = null;
  hashrate = null;
  unconfirmed = null;
  unconfirmedSize = null;
  registeredNames = null;

  pk() {
    return "the_only_one";
  }

  static urlRoot = "http://localhost:8080/summary/";

  /**
   * Get the url for a Resource
   */
  static url(
    urlParams?: { articleId: string } & Partial<AbstractInstanceType<T>>
  ) {
    return "http://localhost:8080/summary";
    // since we're overriding the url() function we must keep the type the
    // same, which means we might not get urlParams
  }
}
