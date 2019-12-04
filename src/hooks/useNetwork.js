import { usePersistedState } from "@urkellabs/ucl";

export default function useNetwork() {
  let [network, setNetwork] = usePersistedState("networkURL", () => {
    if (process.env.NODE_ENV !== "production") {
      return "http://localhost:8080";
    } else {
      return "https://api.hnscan.com";
    }
  });

  return [network, setNetwork];
}
