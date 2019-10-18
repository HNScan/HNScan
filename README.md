# HNScan
An open source block explorer for Handshake - written in React with a plugin for HSD. The primary focus of this explorer is to aid developers while integrating Handshake into their applications. It is originally designed to be run locally and explore regtest or testnet networks.

## Getting Started

There are 2 ways in which you can interact with HNScan.

### 1. Local Install

After cloning this repository:

 Running a local version of HNScan requires a handshake client in order to operate correctly. If you do not have a handshake    client currently running on your machine, refer to the handshake docs to get one started - [Handshake Docs](https://handshake-org.github.io/api-docs/?shell--cli#introduction)

 HNScan also requires a plugin for HSD to run. For full instructions see: https://github.com/HandshakeAlliance/hnscan-backend

 ```
# Install the dependencies
 > yarn

# Run the localhost server
 > yarn start
```

### 2. Hosted Website

Visit [HNScan](https://HNScan.com)


## Development

The easiest way to develop on HNScan, both the frontend and the backend, is by using `yarn/npm link`. Inside of your hnscan-backend directory, run `yarn/npm link` and wait for the process to finish.
Once the linking process is complete, from your `hsd` folder, run `yarn/npm link hnscan`. This will now allow you run the hnscan plugin from a local install, and changes will be picked up on hsd restarts. 

Lastly, run `./bin/hsd --index-tx=true --index-address=true --plugins=hnscan` from inside your hsd folder to complete the backend setup.

## License

This project is licensed under [MIT License](/LICENSE).

