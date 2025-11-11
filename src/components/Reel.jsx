import React, { useState } from "react";
import "../css/reel.css";
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
  FaPlay,
  FaPause,
  FaBookmark,
  FaEllipsisV,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Reels = () => {
  const [liked, setLiked] = useState({});
  const [saved, setSaved] = useState({});
  const [shareOpen, setShareOpen] = useState(false);
  const [search, setSearch] = useState("");

  const reels = [
    {
      id: 1,
      user: "@ritu_goyal_art",
      desc: `"Environment Awareness Poster Mak... more"`,
      video: "/video/sample_6.mp4",
      likes: 568,
    },
    {
      id: 2,
      user: "@King's_club",
      desc: "A night at a concert with friends! more",
      video: "/video/sample_10.mp4",
      likes: 798,
    },
    {
      id: 3,
      user: "@mountain_skier",
      desc: "Skiing down the beautiful mountains! more",
      video: "/video/sample_7.mp4",
      likes: 978,
    },
  ];

  const shareUsers = [
    { name: "Ishpreet Singh", img: "/pics/profile_2.jpg" },
    { name: "Mohit", img: "/pics/profile_6.jpg" },
    { name: "Nishchal", img: "/pics/profile_5.jpg" },
    { name: "Lucky Arora", img: "/pics/profile_3.jpg" },
    { name: "Kanav", img: "/pics/profile_11.jpg" },
    { name: "Lavnish", img: "/pics/profile_10.jpg" },
  ];

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSave = (id) => {
    setSaved((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredUsers = shareUsers.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div id="main_page">
      {/* SIDEBAR NAVIGATION */}
      <div id="main_nav">
        <header>
          <Link to="/" className="logo">
            Instagram
          </Link>
          <nav>
            <Link to="/">
              <FaHome /> <span id="dis">Home</span>
            </Link>
            <Link to="/search">
              <FaSearch /> <span id="dis">Search</span>
            </Link>
            <Link to="/explore">
              <FaCompass /> <span id="dis">Explore</span>
            </Link>
            <Link to="/reels">
              <FaVideo /> <span id="dis">Reels</span>
            </Link>
            <Link to="/messages">
              <FaFacebookMessenger /> <span id="dis">Messages</span>
            </Link>
            <Link to="/notification">
              <FaHeart /> <span id="dis">Notifications</span>
            </Link>
            <Link to="/create">
              <FaPlusSquare /> <span id="dis">Create</span>
            </Link>
            <Link to="/profile">
              <img
                src="/pics/profile_1.jpg"
                alt="Profile"
                className="icon"
                style={{ borderRadius: "50%" }}
              />
              <span id="dis">Profile</span>
            </Link>
            <br />
            <br />
            <br />
            <br />
            <br />
            <a href="#more" className="main_more">
              <FaBars /> <span id="dis">More</span>
            </a>
          </nav>
        </header>
      </div>

      {/* MAIN REELS SECTION */}
      <div className="vertical_line">
        {reels.map((reel) => (
          <div className="short" key={reel.id}>
            <video src={reel.video} autoPlay loop muted />

            <div
              className="play-btn"
              onClick={(e) => {
                const vid = e.currentTarget.parentElement.querySelector("video");
                if (vid.paused) {
                  vid.play();
                  e.currentTarget.innerHTML = "<i class='fas fa-pause'></i>";
                } else {
                  vid.pause();
                  e.currentTarget.innerHTML = "<i class='fas fa-play'></i>";
                }
              }}
            >
              <FaPause />
            </div>

            <div className="video-overlay">
              <div className="user-info">
                <p>{reel.user}</p>
                <p>Follow</p>
              </div>
              <p className="description">{reel.desc}</p>
            </div>

            <div className="actions">
              {/* LIKE */}
              <FaHeart
                className="like-icon"
                style={{
                  color: liked[reel.id] ? "#ff004f" : "white",
                  transform: liked[reel.id] ? "scale(1.2)" : "scale(1)",
                  transition: "0.2s",
                }}
                onClick={() => toggleLike(reel.id)}
              />
              <span className="like-count">
                {liked[reel.id]
                  ? reel.likes + 1
                  : reel.likes >= 1000
                  ? (reel.likes / 1000).toFixed(1) + "k"
                  : reel.likes}
              </span>

              {/* COMMENT ICON */}
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

              {/* SHARE ICON */}
              <svg
                onClick={() => setShareOpen(true)}
                xmlns="http://www.w3.org/2000/svg"
                className="fa-share"
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

              {/* SAVE ICON */}
              <FaBookmark
                onClick={() => toggleSave(reel.id)}
                style={{
                  color: saved[reel.id] ? "#ffd700" : "white",
                  cursor: "pointer",
                }}
              />

              {/* MORE ICON */}
              <FaEllipsisV />
            </div>
          </div>
        ))}

        {/* SHARE POPUP */}
        {shareOpen && (
          <div
            id="sharePopup"
            className="popup"
            onClick={(e) =>
              e.target.id === "sharePopup" && setShareOpen(false)
            }
          >
            <div className="popup-content">
              <span className="close" onClick={() => setShareOpen(false)}>
                &times;
              </span>
              <h2>Share Reel</h2>
              <input
                type="text"
                placeholder="Search user..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                id="searchUser"
              />

              <div className="share-list">
                {filteredUsers.map((u, i) => (
                  <div key={i} className="user">
                    <img src={u.img} alt={u.name} />
                    <p>{u.name}</p>
                  </div>
                ))}
              </div>

              <div className="share-options">
                <button>
                  <FaLink /> Copy Link
                </button>
                <button>
                  <FaFacebook /> Facebook
                </button>
                <button>
                  <FaWhatsapp /> WhatsApp
                </button>
                <button>
                  <FaEnvelope /> Email
                </button>
                <button>
                  <FaTwitter /> Twitter
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reels;
