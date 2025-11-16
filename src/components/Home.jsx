import React, { useState, useEffect, createContext, useContext } from "react";
import "../css/home.css";
import Notification from './Notification';

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
  FaLink,
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
  FaTwitter,
  FaImages,
  FaTimes,
} from "react-icons/fa";

import Search from './Search';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';

// Create Context for Posts
export const PostsContext = createContext();

export function PostsProvider({ children }) {
  const [userPosts, setUserPosts] = useState(() => {
    // Load posts from sessionStorage for home feed (cleared on browser close)
    try {
      const savedPosts = sessionStorage.getItem('userPosts');
      return savedPosts ? JSON.parse(savedPosts) : [];
    } catch (error) {
      console.error('Error loading posts from sessionStorage:', error);
      return [];
    }
  });

  const addPost = (newPost) => {
    setUserPosts(prev => {
      const updatedPosts = [newPost, ...prev];
      // Save to sessionStorage for home feed (temporary)
      try {
        sessionStorage.setItem('userPosts', JSON.stringify(updatedPosts));
      } catch (error) {
        console.error('Error saving posts to sessionStorage:', error);
      }
      
      // Also save to localStorage for profile (permanent)
      try {
        const profilePosts = localStorage.getItem('profilePosts');
        const parsedProfilePosts = profilePosts ? JSON.parse(profilePosts) : [];
        
        // Check if post already exists to prevent duplicates
        const postExists = parsedProfilePosts.some(post => post.id === newPost.id);
        
        if (!postExists) {
          const updatedProfilePosts = [newPost, ...parsedProfilePosts];
          localStorage.setItem('profilePosts', JSON.stringify(updatedProfilePosts));
        }
      } catch (error) {
        console.error('Error saving posts to localStorage:', error);
      }
      
      return updatedPosts;
    });
  };

  return (
    <PostsContext.Provider value={{ userPosts, addPost }}>
      {children}
    </PostsContext.Provider>
  );
}

// Create Component
export function Create({ isOpen, onClose, onPostCreated }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [fileType, setFileType] = useState(null);
  const [caption, setCaption] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setSelectedFile(file);
    const reader = new FileReader();

    reader.onload = () => {
      setPreviewUrl(reader.result);
      if (file.type.startsWith("image/")) {
        setFileType("image");
      } else if (file.type.startsWith("video/")) {
        setFileType("video");
      } else {
        alert("Unsupported file type. Please use image or video.");
        resetModal();
        return;
      }
      setShowPreview(true);
    };

    reader.onerror = () => {
      alert("Failed to read file.");
      resetModal();
    };

    reader.readAsDataURL(file);
  };

  const handleUpload = () => {
    if (!previewUrl) {
      alert("Please select a photo or video.");
      return;
    }

    const newPost = {
      id: "post-" + Date.now(),
      image: previewUrl,
      mediaType: fileType,
      caption: caption.trim(),
      likes: Math.floor(Math.random() * 900) + 100,
      comments: Math.floor(Math.random() * 50),
      username: "vansh_singh_787",
      userPic: "/pics/profile_1.jpg",
      timestamp: Date.now(),
    };

    if (onPostCreated) {
      onPostCreated(newPost);
    }

    alert("✅ Post uploaded successfully!");
    handleClose();
  };

  const handleClose = () => {
    resetModal();
    if (onClose) onClose();
  };

  const resetModal = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setFileType(null);
    setCaption("");
    setShowPreview(false);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay-create" onClick={handleClose}>
      <div className="modal-content-create" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn-create" onClick={handleClose}>
          <FaTimes />
        </button>
        <h3 className="modal-title">Create new post</h3>

        {!showPreview ? (
          <div className="upload-area-create">
            <input
              type="file"
              accept="image/*,video/*"
              onChange={handleFileSelect}
              style={{ display: "none" }}
              id="fileInput"
            />
            <FaImages style={{ fontSize: "50px", color: "#8e8e8e" }} />
            <p style={{ margin: "20px 0", color: "#8e8e8e" }}>
              Drag photos and videos here
            </p>
            <button
              className="btn-create"
              onClick={() => document.getElementById('fileInput')?.click()}
            >
              Select from computer
            </button>
          </div>
        ) : (
          <div className="preview-container">
            <div className="preview-left">
              {fileType === "image" ? (
                <img src={previewUrl} alt="Preview" />
              ) : (
                <video src={previewUrl} controls />
              )}
            </div>
            <div className="preview-right">
              <div className="user-info-create">
                <img src="/pics/profile_1.jpg" alt="Profile" className="user-avatar-create" />
                <strong>vansh_singh_787</strong>
              </div>
              <textarea
                className="caption-input"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                maxLength={2200}
                placeholder="Write a caption..."
              />
              <div className="caption-counter">{caption.length}/2200</div>
              <button className="btn-create btn-share" onClick={handleUpload}>Share</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Post Component
function Post({ post }) {
  const [liked, setLiked] = useState(false);
  const toggleLike = () => setLiked(!liked);

  return (
    <div className="post">
      <div className="home_posts">
        <div id="home_posts_img">
          <a href={`/Profile?name=${post.username}&pic=${post.userPic}`}>
            <img src={post.userPic} alt={post.username} />
          </a>
        </div>
        <a href={`/Profile?name=${post.username}&pic=${post.userPic}`}>
          <p>{post.username}</p>
        </a>
      </div>

      <div id="posts_image">
        {post.mediaType === "video" ? (
          <video src={post.image} controls style={{ width: "100%" }} />
        ) : (
          <img src={post.image} alt="post" />
        )}
      </div>

      <div className="post-footer">
        <div className="post-footer-rxn">
          <button onClick={toggleLike} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center" }}>
            <svg className="like-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill={liked ? "red" : "none"} stroke={liked ? "red" : "#ffffff"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
            </svg>
          </button>

          <button style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
            </svg>
          </button>

          <button style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
              <path d="m21.854 2.147-10.94 10.939" />
            </svg>
          </button>

          <button style={{ background: "none", border: "none", cursor: "pointer", marginLeft: "auto", padding: 0, display: "flex", alignItems: "center" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="likes">
        {liked ? (post.likes + 1).toLocaleString() : post.likes.toLocaleString()} likes
      </div>

      <div className="caption">
        <span className="username">{post.username}</span> {post.caption}
      </div>

      <div className="add-comment">
        <input type="text" placeholder="Add a comment..." />
      </div>
    </div>
  );
}

// Main Home Component
export default function Home() {
  const navigate = useNavigate();
  const postsContext = useContext(PostsContext);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const toggleNotifications = () => setShowNotifications(!showNotifications);
  const toggleMessages = () => setShowMessages(!showMessages);
  const toggleShare = () => setShowShare(!showShare);
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const popupContent = document.querySelector(".popup-content");
      if (showShare && popupContent && !popupContent.contains(event.target)) {
        setShowShare(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [showShare]);

  useEffect(() => {
    const nav = document.getElementById("main_nav");
    const disElements = document.querySelectorAll('#dis');
    const logo = document.querySelector(".logo");
    const instaIcon = document.getElementById("insta-icon");
    const homeElem = document.getElementById("home");
    const profileElem = document.getElementById("profile");

    if (showSearch) {
      disElements.forEach(el => el.style.display = 'none');
      if (nav) nav.style.width = "80px";
      if (logo) logo.style.display = "none";
      if (instaIcon) instaIcon.style.display = "inline-block";
      if (homeElem) homeElem.style.marginLeft = "0px";
      if (profileElem) profileElem.style.marginLeft = "120px";
    } else {
      disElements.forEach(el => el.style.display = 'inline');
      if (nav) nav.style.width = "";
      if (logo) logo.style.display = "inline-block";
      if (instaIcon) instaIcon.style.display = "none";
      if (homeElem) homeElem.style.marginLeft = "";
      if (profileElem) profileElem.style.marginLeft = "";
    }
  }, [showSearch]);

  const staticPosts = [
    {
      id: 1,
      username: "warnerbrosindia",
      userPic: "/pics/warnerbrosindia.jpg",
      image: "/pics/post_3.png",
      likes: 1317839,
      caption: "#ContestAlert #TheConjuring: Last Rites Movie Contest goes live soon",
    },
    {
      id: 2,
      username: "Lucky Arora",
      userPic: "/pics/profile_3.jpg",
      image: "/pics/lucky_2.png",
      likes: 101,
      caption: "✌️",
    },
    {
      id: 3,
      username: "rohitsharma45",
      userPic: "/pics/post_2.png",
      image: "/pics/post_2.png",
      likes: 1317839,
      caption: "🇮🇳👑",
    },
  ];

  const userPosts = postsContext?.userPosts || [];
  const allPosts = [...userPosts, ...staticPosts];

  const handlePostCreated = (newPost) => {
    if (postsContext?.addPost) {
      postsContext.addPost(newPost);
    }
  };

  const messages = [
    { name: "Mohit", pic: "/pics/profile_6.jpg", time: "1h" },
    { name: "Lovepreet", pic: "/pics/profile_4.jpg", time: "1h" },
    { name: "Mohit", pic: "/pics/profile_7.jpg", time: "1h" },
    { name: "Nishchal", pic: "/pics/profile_5.jpg", time: "1h" },
    { name: "Lucky", pic: "/pics/profile_3.jpg", time: "3h" },
    { name: "Ishpreet Singh", pic: "/pics/profile_2.jpg", time: "10h" },
  ];

  const shareUsers = [
    { name: "Ishpreet Singh", pic: "/pics/profile_2.jpg" },
    { name: "Mohit", pic: "/pics/profile_6.jpg" },
    { name: "Nishchal", pic: "/pics/profile_5.jpg" },
    { name: "Lucky Arora", pic: "/pics/profile_3.jpg" },
    { name: "Kanav", pic: "/pics/profile_11.jpg" },
    { name: "Lavnish", pic: "/pics/profile_10.jpg" },
  ];

  const suggestions = [
    { name: "ld.gurveeer", pic: "/pics/demo_1.jpg", text: "Followed by priyanshi.dhall_" },
    { name: "naman1621", pic: "/pics/demo_2.jpg", text: "Followed by _harshitjangta_ + 2" },
    { name: "itsharman_03", pic: "/pics/demo_3.jpg", text: "Followed by _harshitjangta_ + 2" },
    { name: "tanush_520", pic: "/pics/demo_4.jpg", text: "Followed by ananyaguptaa16 + ..." },
    { name: "anand_akash07", pic: "/pics/demo_5.jpg", text: "Followed by chitkarafresherss_2" },
  ];

  return (
    <div id="main_page">
    <Sidebar 
      onSearchClick={toggleSearch}
      onNotificationClick={toggleNotifications}
      onCreateClick={() => setShowCreate(true)}
    />

      <Search isOpen={showSearch} onClose={toggleSearch} />

      <Create 
        isOpen={showCreate} 
        onClose={() => setShowCreate(false)}
        onPostCreated={handlePostCreated}
      />

      {/* ✅ NOTIFICATION COMPONENT - THIS WAS MISSING! */}
      <Notification isOpen={showNotifications} onClose={toggleNotifications} />

      <div id="home">
        <div id="home_status">
          {[
            { img: "profile_5.jpg", name: "Nishchal" },
            { img: "profile_8.jpg", name: "Madhav" },
            { img: "profile_2.jpg", name: "Ishpreet S..." },
            { img: "profile_3.jpg", name: "Lucky" },
            { img: "profile_4.jpg", name: "Lovepreet" },
            { img: "profile_6.jpg", name: "Mohit" },
          ].map((story, i) => (
            <a href="#" className="story" key={i} onClick={(e) => { e.preventDefault(); navigate('/story'); }}>
              <img src={`/pics/${story.img}`} alt={story.name} />
              <p className="username">{story.name}</p>
            </a>
          ))}
        </div>

        <div id="post-no">
          {allPosts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>

      <div id="suggested">
        <div className="current-user">
          <a href="/Profile">
            <img src="/pics/profile_1.jpg" alt="Profile" className="profile-pic" />
          </a>
          <div className="user-info">
            <a href="/Profile"><strong>Vansh Singh</strong></a>
            <p>vansh_singh_787</p>
          </div>
          <a href="#">Switch</a>
        </div>

        <h4>Suggested for you <a href="#" className="see-all">See All</a></h4>

        {suggestions.map((s, i) => (
          <div key={i} className="suggestion profile-link">
            <a href={`/Profile?name=${s.name}&pic=${s.pic}`}>
              <img src={s.pic} alt={s.name} className="profile-pic" />
            </a>
            <div>
              <a href={`/Profile?name=${s.name}&pic=${s.pic}`}>
                <strong>{s.name}</strong>
              </a>
              <p>{s.text}</p>
            </div>
            <a href="#">Follow</a>
          </div>
        ))}

        <footer>
          <p>About · Help · Press · API · Jobs · Privacy · Terms · Locations · Language · Meta Verified</p>
          <p>© 2025 INSTAGRAM FROM META</p>
        </footer>
      </div>

      <div className="popup-bar" onClick={toggleMessages}>
        <div className="icon">
          <FaFacebookMessenger />
        </div>
        <span className="label">Messages</span>
        <div className="avatars">
          <img src="/pics/profile_2.jpg" alt="" />
          <img src="/pics/profile_5.jpg" alt="" />
          <img src="/pics/profile_3.jpg" alt="" />
          <div className="more">...</div>
        </div>
      </div>

      {showMessages && (
        <div className="popup-window">
          <div className="popup-header">
            <div>Messages <span>4</span></div>
            <button onClick={toggleMessages}>✖</button>
          </div>
          {messages.map((msg, i) => (
            <div className="message" key={i}>
              <img src={msg.pic} alt={msg.name} />
              <div className="details">
                <p><b>{msg.name}</b></p>
                <p>{msg.name} sent an attachment <small>{msg.time}</small></p>
              </div>
              <div className="unread-dot"></div>
            </div>
          ))}
        </div>
      )}

      {showShare && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={toggleShare}>&times;</span>
            <h2>Share Reel</h2>
            <input type="text" placeholder="Search user..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

            <div className="share-list">
              {shareUsers.filter((u) => u.name.toLowerCase().includes(searchTerm.toLowerCase())).map((user, i) => (
                <div className="user" key={i}>
                  <img src={user.pic} alt={user.name} />
                  <p>{user.name}</p>
                </div>
              ))}
            </div>

            <div className="share-options">
              <button><FaLink /> Copy Link</button>
              <button><FaFacebook /> Facebook</button>
              <button><FaWhatsapp /> WhatsApp</button>
              <button><FaEnvelope /> Email</button>
              <button><FaTwitter /> X</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}