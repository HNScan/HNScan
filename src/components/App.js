import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, useTheme, ApiConfig } from "@urkellabs/ucl";
import { SolitaryRoute } from "react-solitude";

// Special
import ScrollToTop from "components/shared/ScrollToTop";

// Components
import Navigation from "components/layout/Navigation";
import Footer from "components/layout/Footer";
import ContentContainer from "components/layout/ContentContainer";

// Main Pages
import Address from "screens/Address";
import Block from "screens/Block";
import Blocks from "screens/Blocks";
import Home from "screens/Home";
import Name from "screens/Name";
import Names from "screens/Names";
import Search from "screens/Search";
import Settings from "screens/Settings";
import Transaction from "screens/Transaction";

// More Pages
import AirdropClaimScreen from "screens/tools/AirdropClaim/AirdropClaimScreen";

// Tool Pages
import NodeStatus from "screens/tools/NodeStatus";
import Peers from "screens/tools/Peers";
import Charts from "screens/tools/Charts";
import Changelog from "screens/Changelog";

// Error Pages
import NotFoundScreen from "screens/errors/NotFound";
import NetworkBoundary from "screens/errors/NetworkBoundary";

// Internationalization
import "../i18n/i18n";

// Hooks
import useNetwork from "hooks/useNetwork";

function App() {
  const [theme] = useTheme();
  const [network] = useNetwork();
  return (
    <ThemeProvider theme={theme}>
      <ApiConfig config={{ url: network }}>
        <>
          <GlobalStyles />
          <Router>
            <ScrollToTop />
            <NetworkBoundary>
              <Navigation />
              <ContentContainer>
                <Switch>
                  <SolitaryRoute path="/" exact component={Home} />
                  <SolitaryRoute
                    path="/address/:hash"
                    exact
                    component={Address}
                  />
                  <SolitaryRoute path="/blocks" exact component={Blocks} />
                  <SolitaryRoute
                    path="/block/:height"
                    exact
                    component={Block}
                  />
                  <SolitaryRoute path="/names" exact component={Names} />
                  <SolitaryRoute path="/name/:name" exact component={Name} />
                  <SolitaryRoute path="/settings" exact component={Settings} />
                  {/* Ideally let's get a recent transactions page going */}
                  <SolitaryRoute
                    path="/tx/:hash"
                    exact
                    component={Transaction}
                  />
                  <SolitaryRoute path="/search" exact component={Search} />
                  {/* More Screens */}
                  {/* Tool Screens */}
                  <SolitaryRoute path="/peers" exact component={Peers} />
                  <SolitaryRoute path="/status" exact component={NodeStatus} />
                  <SolitaryRoute path="/charts" component={Charts} />
                  <SolitaryRoute
                    path="/changelog"
                    exact
                    component={Changelog}
                  />
                  <SolitaryRoute
                    path="/airdropclaim"
                    exact
                    component={AirdropClaimScreen}
                  />
                  <SolitaryRoute path="*" component={NotFoundScreen} />
                </Switch>
              </ContentContainer>
              <Footer />
            </NetworkBoundary>
          </Router>
        </>
      </ApiConfig>
    </ThemeProvider>
  );
}

export default App;
