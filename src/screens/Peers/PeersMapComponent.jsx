import React, { Component } from 'react';
// We need to import peers here!!!!!

import * as Peers from './styled-components';

// Maybe move into the class
async function peersHandler() {
  let peers = [];
  // const client = getClient();
  // const peers = await client.execute("getpeerinfo");
  // TODO: this needs to import peers from .../Api (need to add func)
  return peers;
}

export default class PeersMapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peers: peersHandler()
    }
  }

  // componentDidMount() {
  //   // Initialize map for peers
  //   var map = L.map("map").setView([45, -50], 1.5);
  //   L.tileLayer(
  //     "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
  //     {
  //       attribution:
  //         'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  //       maxZoom: 18,
  //       id: "mapbox.streets",
  //       accessToken:
  //         "pk.eyJ1Ijoic2hhbmVqYW5uIiwiYSI6ImNqb3dqbDM2NjF1bGczb3MwYXp4dnp3c2EifQ.RKRrzIoWNE2OvVpfmSrjeQ"
  //     }
  //   ).addTo(map);

  //   requestGeolocation(peers);
  // }

  // addMarkers(geo, coords) {
  //   var marker = L.marker(coords, {
  //     title: geo.ip
  //   }).addTo(map).on('click', markerTooltip)
  // }

  // markerTooltip(e) {
  //   var el = document.getElementById(e.target.options.title);
  //   el.scrollIntoView();
  // }

  // applyGeolocation(geo) {
  //   var location = document.getElementById("location-" + geo.ip);
  //   var country = document.getElementById("country-" + geo.ip);
  //   location.innerHTML = geo.city + ", " + geo.state_prov;
  //   country.innerHTML = geo.country_name;
  // }

  // requestGeolocation(peers) {
  //   var url, coords, xmlHttp, ips;
  //   if (!peers.length) {
  //     return;
  //   }
  //   // extract ips from array of objects
  //   ips = peers.map(function (el) {
  //     return el.addr.split(':')[0]
  //   })
  //   for (var ip of ips) {
  //     xmlHttp = new XMLHttpRequest();
  //     url = `https://api.ipgeolocation.io/ipgeo?apiKey=0fcc7a37c67c4519a2c5e3c84dccf9c6&ip=${ip}&fields=geo`;
  //     // XXX This is REALLY bad...If more than 10 peers appear, this will get really slow...
  //     xmlHttp.open("GET", url, false);
  //     xmlHttp.onreadystatechange = function () {
  //       if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
  //         var response = JSON.parse(xmlHttp.responseText)
  //         coords = [response.latitude, response.longitude];
  //         addMarkers(response, coords);
  //         applyGeolocation(response);
  //       }
  //     }
  //     xmlHttp.setRequestHeader('Content-Type', 'application/json');
  //     xmlHttp.send();
  //   }
  // }

  render() {
    return (
      <Peers.MapWrapper>
        <Peers.MapHeader>Peers</Peers.MapHeader>
        <Peers.Map id="map" />
      </Peers.MapWrapper>
    );
  }
}

// ----- TODO: Need to figure out how to import this sucker ----- //
// script(
//   src = 'https://unpkg.com/leaflet@1.3.4/dist/leaflet.js',
//    integrity = 'sha512-nMMmRyTVoLYqjP9hrbed9S+FzjZHW5gY1TWCHA5ckwXZBadntCNs8kEqAWdrb9O7rxbCaA4lKTIWjDXZxflOcA==',
//    crossorigin = ''
//   )
