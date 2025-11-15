import React, { useState, useEffect } from "react";
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
  FaTh,
  FaBookmark,
  FaUser,
  FaCog,
} from "react-icons/fa";

import '../css/profile.css';
import Search from './Search';

export default function Profile() {

  const [activeTab, setActiveTab] = useState("posts");
  const [showSearch, setShowSearch] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Vansh Singh",
    displayName: "vansh_singh_787",
    pic: "/pics/profile_1.jpg",
    posts: 5,
    followers: "91",
    following: 131,
    bio: "Warner Bros. India",
  });

  const [postsData, setPosts] = useState([]);
  const [savedData, setSaved] = useState([]);
  const [taggedData, setTagged] = useState([]);

  const getRandomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const formatNumber = (num) => {
    if (num >= 1000) return `${Math.floor(num / 1000)}K`;
    return num.toString();
  };

  const toggleSearch = (e) => {
    e.preventDefault();
    setShowSearch(!showSearch);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    const pic = params.get('pic');

    if (name && pic) {
        setProfileData(prev => ({
        ...prev,
        name: name,
        displayName: name,
        pic: pic
        }));
    }

    const postPool = [
      { type: "img", src: "/pics/pf_3_1.png" },
      { type: "img", src: "/pics/pf_3_2.png" },
      { type: "img", src: "/pics/post_1.png" },
      { type: "img", src: "/pics/post_2.png" },
      { type: "img", src: "/pics/post_3.png" },
      { type: "img", src: "/pics/post_4.png" },
      { type: "video", src: "/video/sample_2.mp4" },
      { type: "video", src: "/video/sample_4.mp4" },
      { type: "video", src: "/video/sample_7.mp4" },
      { type: "video", src: "/video/horror.mp4" },
    ];

    const pickRandomPosts = (n) => {
      const shuffled = [...postPool].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, n).map((post) => ({
        ...post,
        likes: formatNumber(getRandomInt(100, 2500)),
        comments: getRandomInt(10, 1200),
      }));
    };

    setPosts(pickRandomPosts(4));
    setSaved(pickRandomPosts(4));
    setTagged(pickRandomPosts(4));
  }, []);

  // Handle sidebar styling when search is active
  useEffect(() => {
    const nav = document.getElementById("main_nav");
    const disElements = document.querySelectorAll('#dis');
    const logo = document.querySelector(".logo");
    const instaIcon = document.getElementById("insta-icon");
    const profileElem = document.getElementById("profile");

    if (showSearch) {
      // Activate search mode
      disElements.forEach(el => el.style.display = 'none');
      if (nav) nav.style.width = "80px";
      if (logo) logo.style.display = "none";
      if (instaIcon) instaIcon.style.display = "inline-block";
      if (profileElem) profileElem.style.marginLeft = "120px";
    } else {
      // Revert to normal sidebar
      disElements.forEach(el => el.style.display = 'inline');
      if (nav) nav.style.width = "";
      if (logo) logo.style.display = "inline-block";
      if (instaIcon) instaIcon.style.display = "none";
      if (profileElem) profileElem.style.marginLeft = "";
    }
  }, [showSearch]);

  const renderGrid = (data) => {
    if (data.length === 0) {
      return <p style={{ textAlign: "center", color: "#888" }}>No {activeTab} yet</p>;
    }

    return (
      <div className="total-posts">
        {data.map((post, index) => (
          <div
            key={index}
            className={post.type === "video" ? "grid-item video-item" : "grid-item"}
          >
            {post.type === "img" ? (
              <img src={post.src} alt={`post_${index + 1}`} />
            ) : (
              <video src={post.src} autoPlay loop muted></video>
            )}
            <div className="overlay-stats">
              <span>
                <i className="fas fa-heart"></i> {post.likes}
              </span>
              <span>
                <i className="fas fa-comment"></i> {post.comments}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div id="main_page">
      {/* SIDEBAR NAVIGATION */}
      <div id="main_nav">
        <header>
          <a href="#" className="logo" style={{ fontFamily: "Dancing Script" }}>
            Instagram
          </a>
          <a href="#" id="insta-icon" style={{ display: "none" }}>
            <FaInstagram />
          </a>
          <nav>
            <a href="/Home">
              <FaHome />
              <span id="dis">Home</span>
            </a>
            <a href="#search" onClick={toggleSearch}>
              <FaSearch />
              <span id="dis">Search</span>
            </a>
            <a href="Explore">
              <FaCompass />
              <span id="dis">Explore</span>
            </a>
            <a href="/reels">
              <FaVideo />
              <span id="dis">Reels</span>
            </a>
            <a href="Messages">
              <FaFacebookMessenger />
              <span id="dis">Messages</span>
            </a>
            <a href="/notification">
              <FaHeart />
              <span id="dis">Notifications</span>
            </a>
            <a href="Create">
              <FaPlusSquare />
              <span id="dis">Create</span>
            </a>
            <a href="/profile">
              <img
                src="/pics/profile_1.jpg"
                alt="Profile"
                className="icon"
                style={{ borderRadius: "50%" }}
              />
              <span id="dis">Profile</span>
            </a>
            <br />
            <br />
            <br />
            <br />
            <br />
            <a href="#more" className="main_more">
              <FaBars />
              <span id="dis">More</span>
            </a>
          </nav>
        </header>
      </div>

      {/* SEARCH COMPONENT */}
      <Search isOpen={showSearch} onClose={toggleSearch} />

      {/* PROFILE */}
      <div id="profile">
        <div className="profile-header">
          <div className="profile-pic">
            <img src={profileData.pic} alt="Profile Picture" />
          </div>
          <div className="profile-info">
            <div className="profile-top">
              <h2>{profileData.name}</h2>
              <button className="btn">Edit profile</button>
              <button className="btn">View archive</button>
              <FaCog className="settings" title="options" />
            </div>
            <div className="profile-stats">
              <span>
                <strong>{profileData.posts.toLocaleString()}</strong> posts
              </span>
              <span style={{ cursor: "pointer" }}>
                <strong>{profileData.followers}</strong> followers
              </span>
              <span style={{ cursor: "pointer" }}>
                <strong>{profileData.following}</strong> following
              </span>
            </div>
            <div className="profile-bio">
              <p>
                <strong style={{ cursor: "pointer" }}>{profileData.displayName}</strong>
                <br />
                ...
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />

        {/* Tabs Section */}
        <div className="profile-tabs">
          <button
            className={`tab-btn ${activeTab === "posts" ? "active" : ""}`}
            data-tab="posts"
            onClick={() => setActiveTab("posts")}
          >
            <FaTh />
          </button>
          <button
            className={`tab-btn ${activeTab === "saved" ? "active" : ""}`}
            data-tab="saved"
            onClick={() => setActiveTab("saved")}
          >
            <FaBookmark />
          </button>
          <button
            className={`tab-btn ${activeTab === "tagged" ? "active" : ""}`}
            data-tab="tagged"
            onClick={() => setActiveTab("tagged")}
          >
            <FaUser />
          </button>
        </div>

        {/* Tab Contents */}
        <div
          className="tab-content"
          id="posts"
          style={{ display: activeTab === "posts" ? "block" : "none" }}
        >
          {renderGrid(postsData)}
        </div>

        <div
          className="tab-content"
          id="saved"
          style={{ display: activeTab === "saved" ? "block" : "none" }}
        >
          {renderGrid(savedData)}
        </div>

        <div
          className="tab-content"
          id="tagged"
          style={{ display: activeTab === "tagged" ? "block" : "none" }}
        >
          {renderGrid(taggedData)}
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        {/* Footer */}
        <footer className="footer">
          <div className="links">
            <a href="#">Meta</a>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Jobs</a>
            <a href="#">Help</a>
            <a href="#">API</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Locations</a>
            <a href="#">Instagram Lite</a>
            <a href="#">Meta AI</a>
            <a href="#">Meta AI Articles</a>
            <a href="#">Threads</a>
            <a href="#">Contact Uploading & Non-Users</a>
            <a href="#">Meta Verified</a>
          </div>
          <div className="footer-bottom">
            <select className="language-select">
              <option>English</option>
            </select>
            <span className="copyright">&copy; 2025 Instagram from Meta</span>
          </div>
        </footer>
      </div>
    </div>
  );
}