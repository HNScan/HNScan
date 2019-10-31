import { Resource } from "rest-hooks";

export default class BlockResource extends Resource {
  data = null;

  pk() {
    return "the_only_one";
  }

  static urlRoot = `${process.env.REACT_APP_API_URL}/mapdata/`;

  /**
   * Get the url for a Resource
   */
  static url(
    urlParams?: { articleId: string } & Partial<AbstractInstanceType<T>>
  ) {
    return `${process.env.REACT_APP_API_URL}/mapdata`;
    // since we're overriding the url() function we must keep the type the
    // same, which means we might not get urlParams
  }
}
