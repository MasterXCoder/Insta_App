import React, { useState, useEffect, useContext } from "react";
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
  FaPlusCircle,
  FaCamera,
} from "react-icons/fa";

import '../css/profile.css';
import Search from './Search';
import Sidebar from './Sidebar';
import Notification from './Notification';
import { PostsContext, Create } from './Home';

export default function Profile() {
  const postsContext = useContext(PostsContext);
  const [activeTab, setActiveTab] = useState("posts");
  const [showSearch, setShowSearch] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Vansh Singh",
    displayName: "vansh_singh_787",
    pic: "/pics/profile_1.jpg",
    posts: 0,
    followers: "91",
    following: 131,
    bio: "...",
  });

  const [postsData, setPosts] = useState([]);
  const [savedData, setSaved] = useState([]);
  const [taggedData, setTagged] = useState([]);
  const [isOwnProfile, setIsOwnProfile] = useState(true);

  const getRandomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const formatNumber = (num) => {
    if (num >= 1000) return `${Math.floor(num / 1000)}K`;
    return num.toString();
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const toggleCreate = () => {
    setShowCreate(!showCreate);
  };

  const handlePostCreated = (newPost) => {
    if (postsContext?.addPost) {
      postsContext.addPost(newPost);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    const pic = params.get('pic');

    // Check if this is the user's own profile
    const ownProfile = !name || name === "vansh_singh_787" || pic === "/pics/profile_1.jpg";
    setIsOwnProfile(ownProfile);

    if (name && pic && !ownProfile) {
      // This is someone else's profile - show random posts
      setProfileData(prev => ({
        ...prev,
        name: name,
        displayName: name,
        pic: pic
      }));

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
      setProfileData(prev => ({ ...prev, posts: 4 }));
    } else {
      // This is own profile - show only user created posts
      const userPosts = postsContext?.userPosts || [];
      
      // Convert user posts to grid format
      const userPostsGrid = userPosts.map(post => ({
        type: post.mediaType === 'video' ? 'video' : 'img',
        src: post.image,
        likes: formatNumber(post.likes),
        comments: post.comments,
      }));

      setPosts(userPostsGrid);
      setSaved([]); // Empty for now
      setTagged([]); // Empty for now

      // Update post count
      setProfileData(prev => ({
        ...prev,
        posts: userPostsGrid.length,
        name: "Vansh Singh",
        displayName: "vansh_singh_787",
        pic: "/pics/profile_1.jpg"
      }));
    }
  }, [postsContext?.userPosts]);

  useEffect(() => {
    const nav = document.getElementById("main_nav");
    const disElements = document.querySelectorAll('#dis');
    const logo = document.querySelector(".logo");
    const instaIcon = document.getElementById("insta-icon");
    const profileElem = document.getElementById("profile");

    if (showSearch) {
      disElements.forEach(el => el.style.display = 'none');
      if (nav) nav.style.width = "80px";
      if (logo) logo.style.display = "none";
      if (instaIcon) instaIcon.style.display = "inline-block";
      if (profileElem) profileElem.style.marginLeft = "120px";
    } else {
      disElements.forEach(el => el.style.display = 'inline');
      if (nav) nav.style.width = "";
      if (logo) logo.style.display = "inline-block";
      if (instaIcon) instaIcon.style.display = "none";
      if (profileElem) profileElem.style.marginLeft = "";
    }
  }, [showSearch]);

  const renderGrid = (data) => {
    if (data.length === 0) {
      // Show empty state only for own profile
      if (isOwnProfile && activeTab === "posts") {
        return (
          <div className="share-photos" style={{ textAlign: "center", padding: "60px 20px" }}>
            <FaCamera style={{ fontSize: "60px", color: "#8e8e8e", marginBottom: "20px" }} />
            <h3 style={{ color: "#fff", marginBottom: "10px" }}>Share Photos</h3>
            <p style={{ color: "#8e8e8e", marginBottom: "20px" }}>
              When you share photos, they will appear on your profile.
            </p>
            <a href="#" style={{ color: "#0095f6", textDecoration: "none", fontWeight: "600" }}>
              Share your first photo
            </a>
          </div>
        );
      }
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
      <Sidebar 
        onSearchClick={toggleSearch}
        onNotificationClick={toggleNotifications}
        onCreateClick={toggleCreate}
      />

      <Search isOpen={showSearch} onClose={toggleSearch} />
      <Notification isOpen={showNotifications} onClose={toggleNotifications} />
      <Create 
        isOpen={showCreate} 
        onClose={() => setShowCreate(false)}
        onPostCreated={handlePostCreated}
      />

      <div id="profile">
        <div className="profile-header">
          <div className="profile-pic">
            <img src={profileData.pic} alt="Profile Picture" />
          </div>
          <div className="profile-info">
            <div className="profile-top">
              <h2>{profileData.displayName}</h2>
              {isOwnProfile && (
                <>
                  <button className="btn">Edit profile</button>
                  <button className="btn">View archive</button>
                  <FaCog className="settings" title="options" />
                </>
              )}
              {!isOwnProfile && (
                <>
                  <button className="btn" style={{ background: "#0095f6" }}>Follow</button>
                  <button className="btn">Message</button>
                </>
              )}
            </div>
            <div className="profile-stats">
              <span>
                <strong>{profileData.posts}</strong> posts
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
                <strong style={{ cursor: "pointer" }}>{profileData.name}</strong>
                <br />
                {profileData.bio}
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />

        {isOwnProfile && postsData.length === 0 && (
          <div className="new-post" style={{ textAlign: "center", marginBottom: "40px" }}>
            <FaPlusCircle style={{ fontSize: "40px", color: "#8e8e8e", cursor: "pointer" }} title="add new" />
            <p style={{ color: "#8e8e8e", marginTop: "10px" }}>New</p>
          </div>
        )}

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