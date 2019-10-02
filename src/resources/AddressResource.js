import { Resource } from "rest-hooks";

export default class AddressResource extends Resource {
  hash = "";
  confirmed = null;
  unconfirmed = null;
  spent = null;
  received = null;

  pk() {
    return this.hash;
  }

  static urlRoot = `${process.env.REACT_APP_API_URL}/addresses/`;
}
