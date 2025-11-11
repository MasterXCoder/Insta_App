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
  FaXTwitter,
  FaEllipsisVertical,
  FaPlay,
  FaPause,
} from "react-icons/fa6";

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
      video: "../video/sample_6.mp4",
      likes: 568,
    },
    {
      id: 2,
      user: "@King's_club",
      desc: "A night at a concert with friends! more",
      video: "../video/sample_10.mp4",
      likes: 798,
    },
    {
      id: 3,
      user: "@mountain_skier",
      desc: "Skiing down the beautiful mountains! more",
      video: "../video/sample_7.mp4",
      likes: 978,
    },
  ];

  const shareUsers = [
    { name: "Ishpreet Singh", img: "../pics/profile_2.jpg" },
    { name: "Mohit", img: "../pics/profile_6.jpg" },
    { name: "Nishchal", img: "../pics/profile_5.jpg" },
    { name: "Lucky Arora", img: "../pics/profile_3.jpg" },
    { name: "Kanav", img: "../pics/profile_11.jpg" },
    { name: "Lavnish", img: "../pics/profile_10.jpg" },
  ];

  const toggleLike = (id) => {
    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleSave = (id) => {
    setSaved((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredUsers = shareUsers.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div id="main_page">
      <div id="main_nav">
        <header>
          <a href="#" className="logo">
            Instagram
          </a>
          <nav>
            <a href="home.html" id="insta-icon">
              <FaInstagram />
            </a>
            <a href="home.html">
              <FaHome /> <span id="dis">Home</span>
            </a>
            <a href="#search">
              <FaSearch /> <span id="dis">Search</span>
            </a>
            <a href="explore.html">
              <FaCompass /> <span id="dis">Explore</span>
            </a>
            <a href="reel.html">
              <FaVideo /> <span id="dis">Reels</span>
            </a>
            <a href="message.html">
              <FaFacebookMessenger /> <span id="dis">Messages</span>
            </a>
            <a href="#notifications">
              <FaHeart /> <span id="dis">Notifications</span>
            </a>
            <a href="#create">
              <FaPlusSquare /> <span id="dis">Create</span>
            </a>
            <a href="profile.html">
              <img
                src="../pics/profile_1.jpg"
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
              <FaBars /> <span id="dis">More</span>
            </a>
          </nav>
        </header>
      </div>

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
                  e.currentTarget.innerHTML = `<i class='fas fa-pause'></i>`;
                } else {
                  vid.pause();
                  e.currentTarget.innerHTML = `<i class='fas fa-play'></i>`;
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

              {/* Comment Icon */}
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

              {/* Share Icon */}
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

              {/* Save Icon */}
              <svg
                onClick={() => toggleSave(reel.id)}
                className="rxn-save"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={saved[reel.id] ? "#ffd700" : "none"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
              </svg>

              <FaEllipsisVertical />
            </div>
          </div>
        ))}

        {/* SHARE POPUP */}
        {shareOpen && (
          <div id="sharePopup" className="popup" onClick={(e) => e.target.id === "sharePopup" && setShareOpen(false)}>
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
                  <FaXTwitter /> X
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
