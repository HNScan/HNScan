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

  static urlRoot = `${process.env.REACT_APP_API_URL}/summary/`;

  /**
   * Get the url for a Resource
   */
  static url(
    urlParams?: { articleId: string } & Partial<AbstractInstanceType<T>>
  ) {
    return `${process.env.REACT_APP_API_URL}/summary`;
    // since we're overriding the url() function we must keep the type the
    // same, which means we might not get urlParams
  }
}
