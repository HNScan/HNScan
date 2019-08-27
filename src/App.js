import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';

import NavbarComponent from './components/Navbar/NavbarComponent';

function App() {
  return (
    <div>
      <NavbarComponent />
      <Router>
        {/* <Route path="/" exact component={HomeScreen} /> */}
        {/* <Route path="/" exact component={}/> */}
        {/* <Route path="/" exact component={}/> */}
        {/* <Route path="*" component={NotFoundScreen}/> */}
      </Router>
    </div>
  );
}

export default App;
