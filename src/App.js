import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from './screens/Home/HomeScreen';
import BlocksScreen from './screens/Blocks/BlocksScreen';
import NamesScreen from './screens/Names/NamesScreen';
import './App.scss';

import NavbarComponent from './components/Navbar/NavbarComponent';

function App() {
  return (
    <div>
      <NavbarComponent />
      <Router>
        <Route path="/" exact component={ HomeScreen } />
        <Route path="/blocks" exact component={ BlocksScreen }/>
        <Route path="/names" exact component={ NamesScreen }/>
        {/* <Route path="*" component={NotFoundScreen}/> */}
      </Router>
    </div>
  );
}

export default App;
