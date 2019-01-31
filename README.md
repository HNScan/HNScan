# HNScan
An open source block explorer for Handshake - written in Node.js. The primary focus of this explorer is to aid developers while integrating Handshake into their applications. It is originally designed to be run locally and explore regtest or tesnet networks.

## Getting Started

There are 3 ways in which you can interact with HNScan.

### 1. Docker

```
docker run -p 8080:8080 HandshakeAlliance/HNScan
```

### 2. Local Install

After cloning this repository:

 Running a local version of HNScan requires a handshake client in order to operate correctly. If you do not have a handshake    client currently running on your machine, refer to the handshake docs to get one started - [Handshake Docs](https://handshake-org.github.io/api-docs/?shell--cli#introduction)

 HNScan also requires a nomenclate instance to be running. We suggest running nomenclate as a plugin to HSD which you can find instructions for doing so here: https://github.com/HandshakeAlliance/nomenclate

 ```
# Install the dependencies
 > npm install

# Run the localhost server
 > npm run dev
```

### 3. Hosted Website

Visit [HNScan](https://HNScan.com)


## License

This project is licensed under [MIT License](/LICENSE).
