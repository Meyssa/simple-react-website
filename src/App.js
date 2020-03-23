import React from 'react';
import PageWrapper from './components/PageWrapper';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";

//Pages
import Home from './components/Pages/Home';
import About from './components/Pages/About';

function App() {
  return (
    <Router>
<PageWrapper>
  <Route path="/" exact={true} component={Home}/>
  <Route path="/About" exact={true} component={About}/>
</PageWrapper>
    </Router>

  );
}

export default App;
