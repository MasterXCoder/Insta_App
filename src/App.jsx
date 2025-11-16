import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home, { PostsProvider } from "./components/Home";
import Notification from "./components/Notification";
import Login from "./components/Login";
import Reels from "./components/Reel";
import Profile from './components/Profile';
import Story from './components/Story';
import Explore from './components/Explore';

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
      <PostsProvider>
        <Routes>
          <Route path="/" element={<LoginWrapper />} />
          <Route path="/home" element={<Home />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/story" element={<Story />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </PostsProvider>
    </Router>
  );
}