import React, { useState, useEffect } from "react";
import "../css/messages.css"; // your existing CSS
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

const Messages = () => {
  const [activeChat, setActiveChat] = useState(null);
  const [randomReels, setRandomReels] = useState([]);
  const [headerUser, setHeaderUser] = useState({
    name: "",
    img: "",
  });

  // -------------------------- DATA ---------------------------- //

  const messagesList = [
    { id: 1, name: "Ishpreet Singh", img: "/pics/profile_2.jpg", msg: "You sent an attachment · 28m" },
    { id: 2, name: "Mohit Chaudhary", img: "/pics/profile_7.jpg", msg: "You sent an attachment · 48m" },
    { id: 3, name: "Mohit", img: "/pics/profile_6.jpg", msg: "You sent an attachment · 1h" },
    { id: 4, name: "Lucky Arora", img: "/pics/profile_3.jpg", msg: "You sent an attachment · 2h" },
    { id: 5, name: "Madhav", img: "/pics/profile_8.jpg", msg: "Liked a message · 3h" },
    { id: 6, name: "Lovepreet", img: "/pics/profile_4.jpg", msg: "ok · 8h" },
    { id: 7, name: "Nishchal", img: "/pics/profile_5.jpg", msg: "done · 8h" },
  ];

  const reelsVideos = [
    "/video/sample_6.mp4",
    "/video/sample_7.mp4",
    "/video/sample_8.mp4",
    "/video/sample_9.mp4",
    "/video/sample_10.mp4",
  ];

  const reelNames = [
    "vansh_singh_02",
    "karan_086",
    "arman@165",
    "ritu_goyal_art",
    "mountain_skier",
  ];

  // -------------------------- HELPERS ---------------------------- //

  const getRandomUnique = (arr, n) => {
    const copy = [...arr];
    const result = [];
    while (result.length < n && copy.length) {
      const idx = Math.floor(Math.random() * copy.length);
      result.push(copy.splice(idx, 1)[0]);
    }
    while (result.length < n) {
      result.push(arr[Math.floor(Math.random() * arr.length)]);
    }
    return result;
  };

  const randomSide = () => (Math.random() < 0.5 ? "left" : "right");

  // --------------------- Handle Selecting a Chat --------------------- //

  const openChat = (msg) => {
    setActiveChat(msg.id);

    // update header
    setHeaderUser({
      name: msg.name,
      img: msg.img,
    });

    // generate random reel set
    const chosenVideos = getRandomUnique(reelsVideos, 2);
    const chosenNames = getRandomUnique(reelNames, 2);

    const formattedReels = chosenVideos.map((video, i) => ({
      id: i,
      video,
      username: chosenNames[i],
      side: randomSide(),
    }));

    setRandomReels(formattedReels);
  };

  // -------------------------- REEL CARD ---------------------------- //

  const ReelCard = ({ side, username, video }) => {
    return (
      <div className={side === "right" ? "short-right" : "short-left"}>
        {side === "right" && (
          <div className="short-icons">
            <div className="icon-tooltip"><i className="fa-solid fa-ellipsis size-6"></i><span className="tooltip-text">More</span></div>
            <div className="icon-tooltip"><i className="fa-solid fa-reply size-6"></i><span className="tooltip-text">Reply</span></div>
            <div className="icon-tooltip">
              <svg aria-label="Choose an emoji" fill="currentColor" viewBox="0 0 24 24" className="size-6">
                <path d="M15.83 10.997a1.167 1.167 ...."></path>
              </svg>
              <span className="tooltip-text">React</span>
            </div>
          </div>
        )}

        <div className="video-container">
          <div className="video-header">
            <img src="/pics/profile_2.jpg" className="profile-pic" alt="profile" />
            <span className="profile-name">{username}</span>
          </div>

          <video
            className="video-container-reel"
            src={video}
            autoPlay
            muted
            loop
            playsInline
          ></video>

          <div className="reels-icon">
            <svg aria-label="Reels" fill="currentColor" height="32" viewBox="0 0 24 24" width="32">
              <line x1="2.049" x2="21.95" y1="7.002" y2="7.002" stroke="currentColor"></line>
            </svg>
          </div>
        </div>

        {side === "left" && (
          <div className="short-icons">
            <div className="icon-tooltip"><i className="fa-solid fa-ellipsis size-6"></i><span className="tooltip-text">More</span></div>
            <div className="icon-tooltip"><i className="fa-solid fa-reply size-6"></i><span className="tooltip-text">Reply</span></div>
            <div className="icon-tooltip">
              <svg aria-label="Choose an emoji" fill="currentColor" viewBox="0 0 24 24" className="size-6">
                <path d="M15.83 10.997a1.167 1.167 ...."></path>
              </svg>
              <span className="tooltip-text">React</span>
            </div>
          </div>
        )}
      </div>
    );
  };

  // -------------------------- RENDER UI ---------------------------- //

  return (
    <div id="main_page">

      {/* Left Sidebar Navigation */}
      <div id="main_nav">
        <header>
          <a href="/home" className="logo instagram-icon">Instagram</a>
           <nav>
             <a href="#"><FaInstagram /></a>
             <a href="/Home"><FaHome /><span id="dis">Home</span></a>
             <a href="Search"><FaSearch /><span id="dis">Search</span></a>
             <a href="Explore"><FaCompass /><span id="dis">Explore</span></a>
             <a href="/reels"><FaVideo /><span id="dis">Reels</span></a>
             <a href="/Messages" ><FaFacebookMessenger /><span id="dis">Messages</span></a>
             <a href="/notification"><FaHeart /><span id="dis">Notifications</span></a>
             <a href="Create" ><FaPlusSquare /><span id="dis">Create</span></a>
             <a href="#"><img src="/pics/profile_1.jpg" alt="Profile" className="icon" style={{ borderRadius: "50%" }} /><span id="dis">Profile</span></a>
             <a href="#"><FaBars /><span id="dis">More</span></a>
           </nav>
        </header>
      </div>

      {/* Messages Layout */}
      <div className="messages_main">

        {/* LEFT — Messages List */}
        <div className="sidebar">
          <header className="sidebar-header">
            <div className="search-container">
              <svg viewBox="0 0 24 24" className="size-6">
                <path d="m21 21-5.197-5.197..."></path>
              </svg>
              <input type="text" className="search-input" placeholder="Search" />
            </div>
          </header>

          <section className="notes-section">
            {/* Hardcoded notes exactly like HTML */}
            <div className="notes"><span className="note-bubble">Note...</span><img src="/pics/profile_1.jpg" className="note-img" /><span className="note-username">Your note</span></div>
            <div className="notes"><span className="note-bubble">Rao Sahab</span><img src="/pics/profile_5.jpg" className="note-img" /><span className="note-username">Nishchal</span></div>
            <div className="notes"><span className="note-bubble">Radhe radhe</span><img src="/pics/profile_9.jpg" className="note-img" /><span className="note-username">Mani</span></div>
          </section>

          <div className="messages-container">
            <header className="messages-list-header">
              <h2 className="messages_title">Messages</h2>
              <a href="#" className="requests-link">Requests</a>
            </header>

            <div className="messages-list">
              {messagesList.map((msg) => (
                <div
                  key={msg.id}
                  className="message-person"
                  onClick={() => openChat(msg)}
                >
                  <img src={msg.img} className="person-image" />
                  <div className="person-details">
                    <span className="person-username">{msg.name}</span>
                    <span className="person-preview">{msg.msg}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — Chat Area */}
        <div className="chat-area-main">

          {/* IF no chat selected */}
          {!activeChat && (
            <div className="empty-chat">
              <div className="empty-chat-icon"><i className="fab fa-facebook-messenger"></i></div>
              <h1 className="empty-chat-title">Your messages</h1>
              <p className="empty-chat-subtitle">Send a message to start a chat.</p>
              <button className="send-message-button">Send message</button>
            </div>
          )}

          {/* IF chat selected */}
          {activeChat && (
            <div className="right-main-chat">

              {/* Header */}
              <div className="chat-heading">
                <div className="chat-heading-userinfo">
                  <img src={headerUser.img} alt="" />
                  <span className="chat_user_name">{headerUser.name}</span>
                </div>

                <div className="chat-heading-icons">
                  <i className="fa-solid fa-phone size-6"></i>
                  <i className="fa-solid fa-video size-6"></i>
                  <i className="fa-solid fa-circle-info size-6"></i>
                </div>
              </div>

              {/* Reels */}
              <div className="chat-area">
                <div className="chat-area-reels-right">
                  {randomReels.map((reel) => (
                    <ReelCard
                      key={reel.id}
                      side={reel.side}
                      username={reel.username}
                      video={reel.video}
                    />
                  ))}
                </div>

                {/* Message box */}
                <div className="chat-area-message">
                  <i className="fa-regular fa-face-smile color-primary"></i>
                  <input type="text" placeholder="Message..." />
                  <i className="fa-solid fa-microphone size-6"></i>
                  <i className="fa-solid fa-image size-6"></i>
                  <i className="fa-regular fa-file-video size-6"></i>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default Messages;
