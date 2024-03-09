import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Login from './components/login';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;