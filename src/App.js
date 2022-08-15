
import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
  <Router>
    <div className="App">
        <Nav />
        < Route path="/about" />
        <About />
        <Shop />
      </div>

  </Router>



  );
}

export default App;
