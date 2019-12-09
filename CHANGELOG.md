## [0.2.2](https://github.com/HandshakeAlliance/HNScan/compare/0.2.1...0.2.2) (2019-12-09)



## [0.2.1](https://github.com/HandshakeAlliance/HNScan/compare/0.2.0...0.2.1) (2019-12-08)



# [0.2.0](https://github.com/HandshakeAlliance/HNScan/compare/v0.1.0...0.2.0) (2019-12-05)


### Bug Fixes

* Card.Column usage was breaking page, as that component didnt exist anymore ([f6dc1eb](https://github.com/HandshakeAlliance/HNScan/commit/f6dc1eb17ab3d06743da66b9d4eb06f3d64cac81))
* component imports using StackedComponent now properly use the default component StackedData ([35f55b1](https://github.com/HandshakeAlliance/HNScan/commit/35f55b17e1f140f9ffb937983852a375559482b6))
* repair logo transitions ([7bd94ea](https://github.com/HandshakeAlliance/HNScan/commit/7bd94eaabd296a5e21e36b29d74045bbce83c0c1))
* repair Name history page's theme ([#190](https://github.com/HandshakeAlliance/HNScan/issues/190)) ([4317fcd](https://github.com/HandshakeAlliance/HNScan/commit/4317fcdddd7b56bd39c1b9354eab6719712bf312))
* silencing console error and warnings ([86de009](https://github.com/HandshakeAlliance/HNScan/commit/86de0090f9861e6c301b793bfc8a3572656692e7))
* switch util -> utils due to conflicting package ([#162](https://github.com/HandshakeAlliance/HNScan/issues/162)) ([27fa145](https://github.com/HandshakeAlliance/HNScan/commit/27fa145e360a82928b87967a25fd6bc05ca72a6d))
* various console warnings and errors ([6205139](https://github.com/HandshakeAlliance/HNScan/commit/6205139fa86b103f81d1674ccb6c16931e0c4d4d))
* **all:** repair navbar padding, updating Table imports (reactbulma) ([f403af1](https://github.com/HandshakeAlliance/HNScan/commit/f403af1a936d46e2600327ab718bb48c0916302f))
* **all:** repair theme coloring on multiple tables, links, cells, and logos ([e43ac3b](https://github.com/HandshakeAlliance/HNScan/commit/e43ac3bc1edf7bd8b6474bc418d9d6f0b6d34521))
* **navbar:** repair navbar link focus states ([a0c6c10](https://github.com/HandshakeAlliance/HNScan/commit/a0c6c1083a701b264673afc5626710bbeecaaba2))


### Features

* add loading state for Names list, remove minor unnecessary styles ([f30eb90](https://github.com/HandshakeAlliance/HNScan/commit/f30eb90658d490efac84f4b58c34fe766f107bcd))
* add more themes, updating styles ([#178](https://github.com/HandshakeAlliance/HNScan/issues/178)) ([1c49a9f](https://github.com/HandshakeAlliance/HNScan/commit/1c49a9ff56dd83e693be3ccea63d1d032db75725))
* adding external link icons to all external links ([c855c25](https://github.com/HandshakeAlliance/HNScan/commit/c855c25bfa876fe0039efe539ed7fdc77d6ffb16))
* bump urkellabs ucl ([#201](https://github.com/HandshakeAlliance/HNScan/issues/201)) ([4956147](https://github.com/HandshakeAlliance/HNScan/commit/495614765693fc958628e7fdfb38535a89a21d8c))
* conversion to react hooks. plugged in data for the homescreen netsummary, recent txs, and recent blocks ([20c06db](https://github.com/HandshakeAlliance/HNScan/commit/20c06dbb8c9ac4a99a514b28aa8f464f2f28bba9))
* plugged in names data for the network summary ([e936302](https://github.com/HandshakeAlliance/HNScan/commit/e936302661590eb29d14cb22588b0d774ddbd821))
* remove package-lock, fixed a number of warnings we were getting ([922fade](https://github.com/HandshakeAlliance/HNScan/commit/922fadec4d4892c3d53b23e446ab3556140eda8d))
* slight improvement on nodestatus ([42db741](https://github.com/HandshakeAlliance/HNScan/commit/42db741c788bf45ac75e654dd00f55ff43c05c1d))
* **404:** add 404 page and styling ([a678358](https://github.com/HandshakeAlliance/HNScan/commit/a6783589bead81863f22cd3dc104b1719d3bd94a))
* **address-detail:** Add address detail ([0291b5e](https://github.com/HandshakeAlliance/HNScan/commit/0291b5ec6121310bc896278bdcb0146c2bf0d27f))
* **address-detail:** adding the address detail tx summary card (not wired up) ([d35af02](https://github.com/HandshakeAlliance/HNScan/commit/d35af0256b97538eb726f86921d31ce27a2c231f))
* **airdrop-claim:** start building airdrop claim screen ([adda241](https://github.com/HandshakeAlliance/HNScan/commit/adda2418f891ad830423e3bdc6d8b5ff18b268a0))
* **all:** add proper link coloring in multiple locations, add SearchResults page ([47bdd38](https://github.com/HandshakeAlliance/HNScan/commit/47bdd3809eb0795c5277cf6c9f8e74fc13be310d))
* **all:** adding ThemeContext to provide interface for changing theme style ([044874b](https://github.com/HandshakeAlliance/HNScan/commit/044874bddb13c697eabfc76eafec04bc94fa20e9))
* **block-detail:** Add block detail page ([2852ae2](https://github.com/HandshakeAlliance/HNScan/commit/2852ae28f9cf2cdeb3bfe49e3cd1bb0c2c1fc039))
* **navbar:**  add togglability on Tools and More, refactor: change toggleMobileNav to use react style instead of vanilla js ([1973832](https://github.com/HandshakeAlliance/HNScan/commit/1973832e23d856086bbd3aafd632e70dc220ddc6))
* **navbar:** restore navbar open/close functionality at mobile ([3f480a6](https://github.com/HandshakeAlliance/HNScan/commit/3f480a6ddca1cfdb09defe6c921d6ee4fe2f0a2c))
* **NodeStatus/Stacked:** Add route to NodeStatus (incomplete), add stacked component for detail views ([64ab40e](https://github.com/HandshakeAlliance/HNScan/commit/64ab40e39c447610baa1cd4bea2d47b15fc1961f))
* **pagination:** create pagination component with test component in NamesScreen ([5e93da5](https://github.com/HandshakeAlliance/HNScan/commit/5e93da594222286fbc2f35b71bb27886bd1bf480))
* **Peers:** start adding the peers route and map (incomplete) ([23d3341](https://github.com/HandshakeAlliance/HNScan/commit/23d33416d41457ca190e3a7192595dbd11364aaa))
* **tx-detail:** adding tx detail (not using live data) ([0af23cc](https://github.com/HandshakeAlliance/HNScan/commit/0af23cc8f94302bd8e0d132c5b8d66da374d9496))
* add the Navbar template (unformatted), a router, multiple scss files ([3c37b7f](https://github.com/HandshakeAlliance/HNScan/commit/3c37b7feb7cd0b9e54fa3217bfc6fe04215f5c56))
* adding bulma ([c48d95c](https://github.com/HandshakeAlliance/HNScan/commit/c48d95cd56f71854a008c4f2c5d04c3685248863))
* update styles for various components to correctly abide by dark theme variables ([2bc0c11](https://github.com/HandshakeAlliance/HNScan/commit/2bc0c119f77a06688d3c19616666fd76e0ad7f8e))



# 0.1.0 (2019-01-24)



