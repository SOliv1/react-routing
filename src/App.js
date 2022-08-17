
import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/shop/:id" />>
      </Routes>

    </Router>

  );

}

const Home  = () => (
  <nav>
    <h3>Home Page</h3>
  </nav>
);



export default App;
