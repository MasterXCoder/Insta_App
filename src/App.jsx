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

export default function App() {
  return (
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
  );
}
