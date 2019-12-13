import React from "react";
import { Select } from "@urkellabs/ucl";

// Hooks
import useNetwork from "hooks/useNetwork";

export default function NetworkSwitcher(props) {
  let [network, setNetwork] = useNetwork();

  let options = [
    { value: "http://localhost:8080", label: "Local Testnet" },
    { value: "https://api.hnscan.com", label: "HNScan Testnet" },
    { value: "https://experimental.hnscan.com", label: "Experimental Testnet" }
  ];

  return (
    <Select
      options={options}
      defaultValue={
        options.find(element => element.value === network) || options[0]
      }
      onChange={kv => {
        setNetwork(kv.value);
      }}
    />
  );
}

////@todo move this out.
////@todo have this take settings from a config file?
////@todo can I get dropdown to be a dropup?
//@todo make a connection to the URL and show a check mark next to the Switcher if we have ensured that it connects.
