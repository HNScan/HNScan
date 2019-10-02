import { Resource } from "rest-hooks";

export default class StatusResource extends Resource {
  host = null;
  port = null;
  key = null;
  network = null;
  progress = null;
  version = null;
  agent = null;
  connections = null;
  height = null;
  difficulty = null;
  uptime = null;
  totalBytesRecv = null;
  totalBytesSent = null;

  pk() {
    return "the_only_one";
  }

  static urlRoot = `${process.env.REACT_APP_API_URL}/status/`;

  /**
   * Get the url for a Resource
   */
  static url(
    urlParams?: { articleId: string } & Partial<AbstractInstanceType<T>>
  ) {
    return `${process.env.REACT_APP_API_URL}/status/`;
    // since we're overriding the url() function we must keep the type the
    // same, which means we might not get urlParams
  }
}
