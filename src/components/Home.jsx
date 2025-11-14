  import React, { useState, useEffect } from "react";
  import "../css/home.css";
  import "../css/notification.css";
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
  } from "react-icons/fa";

  export default function Home() {
    const [showNotifications, setShowNotifications] = useState(false);
    const [showMessages, setShowMessages] = useState(false);
    const [showShare, setShowShare] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    // Toggle functions
    const toggleNotifications = () => setShowNotifications(!showNotifications);
    const toggleMessages = () => setShowMessages(!showMessages);
    const toggleShare = () => setShowShare(!showShare);

    // Close share popup if clicked outside
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

    const posts = [
      {
        id: 1,
        username: "warnerbrosindia",
        userPic: "/pics/warnerbrosindia.jpg",
        image: "/pics/post_3.png",
        likes: 1317839,
        caption:
          "#ContestAlert #TheConjuring: Last Rites Movie Contest goes live soon",
      },
      {
        id: 2,
        username: "Lucky Arora",
        userPic: "/pics/profile_3.jpg",
        image: "/pics/lucky_2.png",
        likes: 101,
        caption: "✌",
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
      {
        name: "ld.gurveeer",
        pic: "/pics/demo_1.jpg",
        text: "Followed by priyanshi.dhall_",
      },
      {
        name: "naman1621",
        pic: "/pics/demo_2.jpg",
        text: "Followed by _harshitjangta_ + 2",
      },
      {
        name: "itsharman_03",
        pic: "/pics/demo_3.jpg",
        text: "Followed by _harshitjangta_ + 2",
      },
      {
        name: "tanush_520",
        pic: "/pics/demo_4.jpg",
        text: "Followed by ananyaguptaa16 + ...",
      },
      {
        name: "anand_akash07",
        pic: "/pics/demo_5.jpg",
        text: "Followed by chitkarafresherss_2",
      },
    ];

    return (
      <div id="main_page">
        {/* SIDEBAR NAVIGATION */}
        <header id="main_nav">
          <a href="#" className="logo" style={{ fontFamily: "Dancing Script" }}>
            Instagram
          </a>
          <nav>
            <a href="#"><FaInstagram /></a>
            <a href="/Home"><FaHome /><span id="dis">Home</span></a>
            <a href="Search"><FaSearch /><span id="dis">Search</span></a>
            <a href="Explore"><FaCompass /><span id="dis">Explore</span></a>
            <a href="/reels"><FaVideo /><span id="dis">Reels</span></a>
            <a href="/Messages" onClick={toggleMessages}><FaFacebookMessenger /><span id="dis">Messages</span></a>
            <a href="/notification" onClick={toggleNotifications}><FaHeart /><span id="dis">Notifications</span></a>
            <a href="Create" onClick={toggleShare}><FaPlusSquare /><span id="dis">Create</span></a>
            <a href="#"><img src="/pics/profile_1.jpg" alt="Profile" className="icon" style={{ borderRadius: "50%" }} /><span id="dis">Profile</span></a>
            <a href="#"><FaBars /><span id="dis">More</span></a>
          </nav>
        </header>

        {/* NOTIFICATIONS */}
        {showNotifications && (
          <div className="notifications">
            <div className="main">
              <h1>Notifications</h1>
              <div className="request-section">
                <img src="/pics/profile_1.jpg" alt="profile" />
                <div className="request-section-follow">
                  <p><b>Follow requests</b></p>
                  <p className="follow-requests">hiten_256 + 5 others</p>
                </div>
                <div className="blue-dot"></div>
              </div>
              <h2>This week</h2>
              <div className="latest-news">
                <img src="/pics/profile_1.jpg" alt="profile" />
                <p>Learn how Meta will use your info to personalize your experiences.</p>
              </div>
            </div>
          </div>
        )}

        {/* HOME FEED */}
      <div id="home">
        {/* STORIES */}
        <div id="home_status">
          {[
            { img: "profile_5.jpg", name: "Nishchal" },
            { img: "profile_8.jpg", name: "Madhav" },
            { img: "profile_2.jpg", name: "Ishpreet S..." },
            { img: "profile_3.jpg", name: "Lucky" },
            { img: "profile_4.jpg", name: "Lovepreet" },
            { img: "profile_6.jpg", name: "Mohit" },
          ].map((story, i) => (
            <a href="#" className="story" key={i}>
              <img src={`/pics/${story.img}`} alt={story.name} />
              <p className="username">{story.name}</p>
            </a>
          ))}
        </div>



          {/* POSTS */}
          <div id="post-no">
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* SUGGESTIONS SECTION */}
        <div id="suggested">
          <div className="current-user">
            <img src="/pics/profile_1.jpg" alt="Profile" className="profile-pic" />
            <div className="user-info">
              <strong>Vansh Singh</strong>
              <p>vansh_singh_787</p>
            </div>
            <a href="#">Switch</a>
          </div>

          <h4>Suggested for you <a href="#" className="see-all">See All</a></h4>

          {suggestions.map((s, i) => (
            <div key={i} className="suggestion">
              <img src={s.pic} alt={s.name} className="profile-pic" />
              <div>
                <strong>{s.name}</strong>
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

        {/* FLOATING MESSAGE BAR */}
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

        {/* MESSAGES POPUP */}
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

        {/* SHARE POPUP */}
        {showShare && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={toggleShare}>&times;</span>
              <h2>Share Reel</h2>
              <input
                type="text"
                placeholder="Search user..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <div className="share-list">
                {shareUsers
                  .filter((u) =>
                    u.name.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((user, i) => (
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

  // POST COMPONENT
function Post({ post }) {
  const [liked, setLiked] = useState(false);
  const toggleLike = () => setLiked(!liked);

  return (
    <div className="post">
      {/* Header (User Info) */}
      <div className="home_posts">
        <div id="home_posts_img">
          <img src={post.userPic} alt={post.username} />
        </div>
        <p>{post.username}</p>
      </div>

      {/* Post Image */}
      <div id="posts_image">
        <img src={post.image} alt="post" />
      </div>

      {/* Footer (Reaction Icons) */}
      <div className="post-footer">
        <div className="post-footer-rxn">

          {/* ❤ Like Button */}
          <button
            onClick={toggleLike}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <svg
              className="like-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={liked ? "red" : "none"}
              stroke={liked ? "red" : "currentColor"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
            </svg>
          </button>

          {/* 💬 Comment Icon */}
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
            </svg>
          </button>

          {/* 📤 Share Icon */}
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <svg
              className="fa-solid fa-share"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
              <path d="m21.854 2.147-10.94 10.939" />
            </svg>
          </button>

          {/* 🔖 Save Icon */}
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              marginLeft: "auto",
              padding: 0,
            }}
          >
            <svg
              className="rxn-save"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Likes */}
      <div className="likes">
        {liked
          ? (post.likes + 1).toLocaleString()
          : post.likes.toLocaleString()}{" "}
        likes
      </div>

      {/* Caption */}
      <div className="caption">
        <span className="username">{post.username}</span> {post.caption}
      </div>

      {/* Comment Input */}
      <div className="add-comment">
        <input type="text" placeholder="Add a comment..." />
      </div>
    </div>
  );
}
