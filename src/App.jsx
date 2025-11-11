<<<<<<< HEAD
import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Reel from './components/Reel';

function App() {
  console.log('App loaded!');
  const [currentPage, setCurrentPage] = useState('login');
  console.log('Current page:', currentPage);
  
  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };
=======
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Notification from "./components/Notification";
import Login from "./components/Login";
import Reels from "./components/Reel";
// import Search from "./pages/Search";
// import Explore from "./pages/Explore";
// import Reels from "./pages/Reels";
// import Messages from "./pages/Messages";
>>>>>>> ef72e869d527e04c11591e19f7b7982e490536a1

export default function App() {
  return (
<<<<<<< HEAD
    <div style={{ margin: 0, padding: 0, width: '100%', minHeight: '100vh' }}>
      {currentPage === 'login' && <Login onNavigate={navigate} />}
      {currentPage === 'signup' && <Signup onNavigate={navigate} />}
      {currentPage === 'home' && <Home onNavigate={navigate} />}
      {currentPage === 'reel' && <Reel onNavigate={navigate} />}
    </div>
=======
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/reels" element={<Reels />} />
        {/* <Route path="/search" element={<Search />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/reels" element={<Reels />} />
        <Route path="/messages" element={<Messages />} /> */}
      </Routes>
    </Router>
>>>>>>> ef72e869d527e04c11591e19f7b7982e490536a1
  );
}
