import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
// import Notification from "./components/Notification";
import Login from "./components/Login";
import Reels from "./components/Reel";
import Profile from './components/Profile';
import Messages from './components/Messages';
import Story from './components/Story';

// Wrapper component to handle navigation from Login
function LoginWrapper() {
  const navigate = useNavigate();

  const handleNavigate = (page) => {
    if (page === "home") {
      navigate("/home");
    } else if (page === "signup") {
      navigate("/signup");
    } else {
      navigate("/");
    }
  };

  return <Login onNavigate={handleNavigate} />;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginWrapper />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/notification" element={<Notification />} /> */}
        <Route path="/reels" element={<Reels />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Messages" element={<Messages />} />
        <Route path="/story/:storyId" element={<Story />} />
      </Routes>
    </Router>
  );
}
