
import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>S
      <Routes>
        <Route path ="/" />
          <Nav />
          <About />
          <Shop />
      </Routes>
    </Router>

  );
}

export default App;
