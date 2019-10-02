import { Resource } from "rest-hooks";

export default class NameHistoryResource extends Resource {
  txid = null;
  index = null;
  time = null;
  height = null;
  action = "";
  value = null;

  pk() {
    return [this.txid, this.index];
  }

  // static urlRoot = "http://localhost:8080/names/";
  static getKey() {
    return "NameHistoryResource";
  }

  static listUrl(searchParams) {
    if (searchParams && Object.keys(searchParams).length) {
      const { name, ...realSearchParams } = searchParams;
      const params = new URLSearchParams(realSearchParams);
      // this is essential for consistent url strings
      params.sort();
      return `${process.env.REACT_APP_API_URL}/names/${name}/history/?${params.toString()}`;
    }
    throw new Error("History requires name to retrieve");
  }

  static listShape() {
    return {
      ...super.listShape(),
      schema: { result: [this.getEntitySchema()] }
    };
  }
}
