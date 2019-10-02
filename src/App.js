import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NetworkErrorBoundary } from "rest-hooks";
//@todo consider moving this to index, but also we can just use the theme hooks (context hooks).
import ThemeContext from "./contexts/ThemeContext";

// Main Pages
import Address from "./screens/Address";
import Block from "./screens/Block";
import Blocks from "./screens/Blocks";
import Home from "./screens/Home";
import Name from "./screens/Name";
import Names from "./screens/Names";
import Search from "./screens/Search";
import Transaction from "./screens/Transaction";

import AirdropClaimScreen from "./screens/AirdropClaim/AirdropClaimScreen";

// Tool Pages
import NodeStatus from "./screens/tools/NodeStatus";
import Peers from "./screens/tools/Peers";
import Charts from "./screens/tools/Charts";

import NotFoundScreen from "./screens/Errors/NotFoundScreen";
import Changelog from "./screens/Changelog";

import NavbarComponent from "./components/Navbar/NavbarComponent";
import FooterComponent from "./components/Footer/FooterComponent";
import ContentContainer from "./components/ContentContainer";

import "./App.scss";

function App() {
  return (
    <NetworkErrorBoundary>
      <ThemeContext>
        <div>
          <Router>
            <NavbarComponent />
            <ContentContainer>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/address/:hash" exact component={Address} />
                <Route path="/blocks" exact component={Blocks} />
                <Route path="/block/:height" exact component={Block} />
                <Route path="/names" exact component={Names} />
                <Route path="/name/:name" exact component={Name} />
                {/* Ideally let's get a recent transactions page going */}
                <Route path="/tx/:hash" exact component={Transaction} />
                <Route path="/search" exact component={Search} />
                {/* Tool Screens */}
                <Route path="/peers" exact component={Peers} />
                <Route path="/status" exact component={NodeStatus} />
                <Route path="/charts" exact component={Charts} />
                <Route path="/changelog" exact component={Changelog} />
                <Route
                  path="/airdropclaim"
                  exact
                  component={AirdropClaimScreen}
                />
                <Route path="*" component={NotFoundScreen} />
              </Switch>
            </ContentContainer>
            <FooterComponent />
          </Router>
        </div>
      </ThemeContext>
    </NetworkErrorBoundary>
  );
}

export default App;
