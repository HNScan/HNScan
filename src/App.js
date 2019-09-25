import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NetworkErrorBoundary } from "rest-hooks";
//@todo consider moving this to index, but also we can just use the theme hooks (context hooks).
import ThemeContext from "./contexts/ThemeContext";

import HomeScreen from "./screens/Home/HomeScreen";
import AddressDetailScreen from "./screens/AddressDetail/AddressDetailScreen";
import AirdropClaimScreen from "./screens/AirdropClaim/AirdropClaimScreen";
import BlockDetailScreen from "./screens/BlockDetail/BlockDetail";
import Blocks from "./screens/Blocks";
import NameDetailScreen from "./screens/NameDetail/NameDetailScreen";
import NamesScreen from "./screens/Names/NamesScreen";
import NodeStatusScreen from "./screens/NodeStatus/NodeStatusScreen";
import NotFoundScreen from "./screens/Errors/NotFoundScreen";
import PeersScreen from "./screens/Peers/PeersScreen";
import SearchResultsScreen from "./screens/SearchResults/SearchResultsScreen";
import TxDetailScreen from "./screens/TxDetail/TxDetailScreen";

import NavbarComponent from "./components/Navbar/NavbarComponent";
import FooterComponent from "./components/Footer/FooterComponent";

import "./App.scss";

function App() {
  return (
    <NetworkErrorBoundary>
      <ThemeContext>
        <div>
          <Router>
            <NavbarComponent />
            <Switch>
              <Route path="/" exact component={HomeScreen} />
              <Route
                path="/address/:hash"
                exact
                component={AddressDetailScreen}
              />
              <Route
                path="/airdropclaim"
                exact
                component={AirdropClaimScreen}
              />
              <Route path="/blocks" exact component={Blocks} />
              <Route
                path="/block/:height"
                exact
                component={BlockDetailScreen}
              />
              <Route path="/names" exact component={NamesScreen} />
              <Route path="/name/:name" exact component={NameDetailScreen} />
              <Route path="/peers" exact component={PeersScreen} />
              <Route path="/search" exact component={SearchResultsScreen} />
              <Route path="/status" exact component={NodeStatusScreen} />
              <Route path="/tx/:hash" exact component={TxDetailScreen} />
              <Route path="*" component={NotFoundScreen} />
            </Switch>
          </Router>
          <FooterComponent />
        </div>
      </ThemeContext>
    </NetworkErrorBoundary>
  );
}

export default App;
