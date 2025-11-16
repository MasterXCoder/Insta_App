import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaHome,
  FaSearch,
  FaCompass,
  FaVideo,
  FaFacebookMessenger,
  FaHeart,
  FaPlusSquare,
  FaBars,
} from "react-icons/fa";

export default function Sidebar({ onSearchClick, onNotificationClick, onCreateClick }) {
  return (
    <div id="main_nav">
      <header>
        <Link to="/home" className="logo" style={{ fontFamily: "Dancing Script" }}>
          Instagram
        </Link>
        <a href="#" id="insta-icon" style={{ display: "none" }}>
          <FaInstagram />
        </a>
        <nav>
          <Link to="/home">
            <FaHome />
            <span id="dis">Home</span>
          </Link>
          <a 
            href="#search" 
            onClick={(e) => {
              e.preventDefault();
              if (onSearchClick) onSearchClick();
            }}
          >
            <FaSearch />
            <span id="dis">Search</span>
          </a>
          <Link to="/explore">
            <FaCompass />
            <span id="dis">Explore</span>
          </Link>
          <Link to="/reels">
            <FaVideo />
            <span id="dis">Reels</span>
          </Link>
          <Link to="/message">
            <FaFacebookMessenger />
            <span id="dis">Messages</span>
          </Link>
          <a 
            href="#notification" 
            onClick={(e) => {
              e.preventDefault();
              if (onNotificationClick) onNotificationClick();
            }}
          >
            <FaHeart />
            <span id="dis">Notifications</span>
          </a>
          <a 
            href="#create" 
            onClick={(e) => {
              e.preventDefault();
              if (onCreateClick) onCreateClick();
            }}
          >
            <FaPlusSquare />
            <span id="dis">Create</span>
          </a>
          <Link to="/profile">
            <img
              src="/pics/profile_1.jpg"
              alt="Profile"
              className="icon"
              style={{ borderRadius: "50%" }}
            />
            <span id="dis">Profile</span>
          </Link>
          <a href="#more" className="main_more">
            <FaBars />
            <span id="dis">More</span>
          </a>
        </nav>
      </header>
    </div>
  );
}
