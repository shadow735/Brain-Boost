import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Login from './components/login';
import Home from './pages/home';
import Marketplace from './pages/market';
import Quiz from './pages/quiz';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/market" element={<Marketplace />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;