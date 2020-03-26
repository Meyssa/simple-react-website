import React from 'react';
import PageWrapper from './components/Common/PageWrapper';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";

//Pages
import Home from './Pages/Home';
import About from './Pages/About';

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
