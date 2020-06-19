import { usePersistedState } from "@urkellabs/ucl";

export default function useNetwork() {
  //Because we've changed these values, we need to unset the users old value.
  //We should write a more complicated script here than normal, but for now I'm just going to automatically unset it and set the beta value.
  //
  //What we should do is check for any other value that is not one we currently support and then and only then reset it.
  //
  // localStorage.removeItem("networkURL");
  let [network, setNetwork] = usePersistedState("networkURL", () => {
    if (process.env.NODE_ENV !== "production") {
      // return "http://localhost:8080";
      return "https://beta.urkellabs.com";
    } else {
      // return "https://api.hnscan.com";
      return "https://beta.urkellabs.com";
    }
  });

  // return [network, setNetwork]; Hardcode....
  return ["https://beta.urkellabs.com", setNetwork];
}
