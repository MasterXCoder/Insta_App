import React, { useState } from "react";
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

// ✅ Import local images properly
import profile1 from "../../public/pics/profile_1.jpg";
import profile2 from "../../public/pics/profile_2.jpg";
import profile3 from "../../public/pics/profile_3.jpg";
import profile4 from "../../public/pics/profile_4.jpg";
import profile5 from "../../public/pics/profile_5.jpg";
import profile6 from "../../public/pics/profile_6.jpg";
import post1 from "../../public/pics/post_3.png";
import conjuring from "../../public/pics/warnerbrosindia.jpg";
import demo1 from "../../public/pics/demo_1.jpg";
import demo2 from "../../public/pics/demo_2.jpg";
import demo3 from "../../public/pics/demo_3.jpg";
import demo4 from "../../public/pics/demo_4.jpg";
import demo5 from "../../public/pics/demo_5.jpg";

export default function Home() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showSharePopup, setShowSharePopup] = useState(false);
  const [shareSearch, setShareSearch] = useState("");

  const toggleNotifications = () => setShowNotifications(!showNotifications);
  const toggleMessages = () => setShowMessages(!showMessages);
  const toggleSharePopup = () => setShowSharePopup(!showSharePopup);

  const suggestions = [
    { name: "ld.gurveeer", pic: demo1, info: "Followed by priyanshi.dhall_" },
    { name: "naman1621", pic: demo2, info: "Followed by _harshitjangta_ + 2" },
    { name: "itsharman_03", pic: demo3, info: "Followed by _harshitjangta_ + 2" },
    { name: "tanush_520", pic: demo4, info: "Followed by ananyaguptaa16 + ..." },
    { name: "anand_akash07", pic: demo5, info: "Followed by chitkarafresherss_2" },
  ];

  const shareUsers = [
    { name: "Ishpreet Singh", pic: profile2 },
    { name: "Mohit", pic: profile6 },
    { name: "Nishchal", pic: profile5 },
    { name: "Lucky Arora", pic: profile3 },
  ];

  const filteredShareUsers = shareUsers.filter((u) =>
    u.name.toLowerCase().includes(shareSearch.toLowerCase())
  );

  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Instagram</title>
  <link rel="stylesheet" href="../css/home.css" />
  <link
    href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
  />
  <link
    rel="icon"
    href="https://www.instagram.com/static/images/ico/favicon-200.png/ab6eff595bb1.png"
  />
  <link rel="stylesheet" href="../css/notification.css" />
  <div id="main_page">
    <div id="main_nav">
      <header>
        <a href="#" className="logo">
          Instagram
        </a>
        <nav>
          <a href="home.html" id="insta-icon">
            <i className="fab fa-instagram" />
          </a>
          <a href="home.html">
            <i className="fas fa-home" />
            <span id="dis">Home</span>
          </a>
          <a href="#search">
            <i className="fas fa-search" />
            <span id="dis">Search</span>
          </a>
          <a href="explore.html">
            <i className="fas fa-compass" />
            <span id="dis">Explore</span>
          </a>
          <a href="reel.html">
            <i className="fas fa-video" />
            <span id="dis">Reels</span>
          </a>
          <a href="message.html">
            <i className="fab fa-facebook-messenger" />
            <span id="dis">Messages</span>
          </a>
          <a href="#notifications">
            <i className="fas fa-heart" />
            <span id="dis">Notifications</span>
          </a>
          <a href="#create">
            <i className="fas fa-plus-square" />
            <span id="dis">Create</span>
          </a>
          <a href="profile.html">
            <img
              src="../../public/pics/profile_1.jpg"
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
            <i className="fas fa-bars" />
            <span id="dis">More</span>
          </a>
        </nav>
      </header>
    </div>
    {/* Search Container */}
    <div id="search_container">
      <div id="search_top">
        <h2>Search</h2>
        <input type="text" id="search_input" placeholder="Search users..." />
      </div>
      <div id="search_results">
        <div id="recent_section">
          <h3>Recent</h3>
          <div id="recent_list" />
        </div>
      </div>
    </div>
    <div className="notifications">
      <div className="main">
        <h1>Notifications</h1>
        <div className="request-section">
          <img src="../../public/pics/profile_1.jpg" alt="profile" />
          <div className="request-section-follow">
            <p>
              <b>Follow requests</b>
            </p>
            <p className="follow-requests">hiten_256 + 5 others</p>
          </div>
          <div className="blue-dot" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
        <h2>This week</h2>
        <div className="latest-news">
          <img src="../../public/pics/profile_1.jpg" alt="profile" />
          <p>
            Learn how Meta will use your info in new ways to personalize your
            experiences.
          </p>
        </div>
        <h2>This month</h2>
        <div className="notification-list">
          <div className="notification-following">
            <img
              className="notif-avatar"
              src="../../public/pics/profile_3.jpg"
              alt="avatar"
            />
            <div className="notif-content">
              <p>
                <strong>svkhbx</strong> started following you.
              </p>
              <span className="notif-date">Oct 15</span>
            </div>
            <div className="notif-actions">
              <button className="following-btn">Following</button>
            </div>
          </div>
          <div className="notification-item">
            <img
              className="notif-avatar"
              src="../../public/pics/profile_4.jpg"
              alt="avatar"
            />
            <div className="notif-content">
              <p>
                <strong>ishpreet_06, nishchal._16</strong> and 1 other liked
                your story.
              </p>
              <span className="notif-date">Oct 09</span>
            </div>
            <div className="notif-actions">
              {/* no action buttons for likes */}
            </div>
            <img
              className="notif-thumb"
              src="../../public/pics/thumb_2.jpg"
              alt="thumb"
            />
          </div>
          <div className="notification-request">
            <img
              className="notif-avatar"
              src="../../public/pics/profile_5.jpg"
              alt="avatar"
            />
            <div className="notif-content">
              <p>
                <strong>gurvinder_bhatia3</strong> requested to follow you.
              </p>
              <span className="notif-date">Sep 29</span>
            </div>
            <div className="notif-actions">
              <button className="confirm-btn">Confirm</button>
              <button className="delete-btn">Delete</button>
            </div>
            <img
              className="notif-thumb"
              src="../../public/pics/thumb_3.jpg"
              alt="thumb"
            />
          </div>
          {/* duplicate/add more items as needed */}
        </div>
      </div>
    </div>
    {/* HOME PAGE */}
    <div id="home">
      {/* STORY */}
      <div id="home_status">
        <a href="story.html" className="story">
          <img src="../../public/pics/profile_8.jpg" />
          <p className="username">Madhav</p>
        </a>
        <a href="story.html" className="story">
          <img src="../../public/pics/profile_2.jpg" />
          <p className="username">Ishpreet Si...</p>
        </a>
        <a href="story.html" className="story">
          <img src="../../public/pics/profile_3.jpg" />
          <p className="username">Lucky Arora</p>
        </a>
        <a href="story.html" className="story">
          <img src="../../public/pics/profile_4.jpg" />
          <p className="username">Lovepreet</p>
        </a>
        <a href="story.html" className="story">
          <img src="../../public/pics/profile_5.jpg" />
          <p className="username">Nishchal</p>
        </a>
        <a href="story.html" className="story">
          <img src="../../public/pics/profile_6.jpg" />
          <p className="username">Mohit</p>
        </a>
      </div>
      {/* POSTS */}
      <div id="post-no">
        {/* 1st Post  */}
        <div className="post">
          <div className="home_posts">
            <div id="home_posts_img">
              <img src="../../public/pics/warnerbrosindia.jpg" alt="warnerbros" />
            </div>
            <a href="profile_3.html" id="pf_3">
              <p>warnerbrosindia</p>
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </div>
          <div id="posts_image">
            <img src="../../public/pics/post_3.png" alt="post-1" />
          </div>
          <div className="post-footer">
            <div className="post-footer-rxn">
              <input type="checkbox" id="like1" className="like-checkbox" />
              <label htmlFor="like1">
                <svg
                  className="like-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                </svg>
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
              </svg>
              <svg
                className="fa-solid fa-share"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                <path d="m21.854 2.147-10.94 10.939" />
              </svg>
              <svg
                className="rxn-save"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
              </svg>
            </div>
          </div>
          <div className="likes">1,317,839 likes</div>
          <div className="caption">
            <span className="username">
              #ContestAlert #TheConjuring: Last Rites Movie Contest goes live
              soon
            </span>
          </div>
          <div className="comments-link">View all 26,687 comments</div>
          <div className="add-comment">
            <input type="text" placeholder="Add a comment..." />
          </div>
        </div>
        {/* 2nd  Post */}
        <div className="post">
          <div className="home_posts">
            <div id="home_posts_img">
              <img src="../../public/pics/profile_3.jpg" alt="Lucky Arora" />
            </div>
            <a href="profile_2.html" id="pf_3">
              <p>Lucky Arora</p>
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </div>
          <div id="posts_image">
            <img src="../../public/pics/lucky_2.png" alt="post-2" />
          </div>
          <div className="post-footer">
            <div className="post-footer-rxn">
              <input type="checkbox" id="like2" className="like-checkbox" />
              <label htmlFor="like2">
                <svg
                  className="like-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                </svg>
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
              </svg>
              <svg
                className="fa-solid fa-share"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                <path d="m21.854 2.147-10.94 10.939" />
              </svg>
              <svg
                className="rxn-save"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
              </svg>
            </div>
          </div>
          <div className="likes">101 likes</div>
          <div className="caption">
            <span className="username">Lucky Arora</span> ✌️
          </div>
          <div className="comments-link">View all 2 comments</div>
          <div className="add-comment">
            <input type="text" placeholder="Add a comment..." />
          </div>
        </div>
        {/* 3rd Post */}
        <div className="post">
          <div className="home_posts">
            <div id="home_posts_img">
              <img src="../../public/pics/post_2.png" alt="rohitsharma" />
            </div>
            <p>rohitsharma45</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </div>
          <div id="posts_image">
            <img src="../../public/pics/post_2.png" alt="post-3" />
          </div>
          <div className="post-footer">
            <div className="post-footer-rxn">
              <input type="checkbox" id="like3" className="like-checkbox" />
              <label htmlFor="like3">
                <svg
                  className="like-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                </svg>
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
              </svg>
              <svg
                className="fa-solid fa-share"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                <path d="m21.854 2.147-10.94 10.939" />
              </svg>
              <svg
                className="rxn-save"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
              </svg>
            </div>
          </div>
          <div className="likes">1,317,839 likes</div>
          <div className="caption">
            <span className="username">rohitsharma45</span> 🇮🇳👑
          </div>
          <div className="comments-link">View all 26,687 comments</div>
          <div className="add-comment">
            <input type="text" placeholder="Add a comment..." />
          </div>
        </div>
      </div>
    </div>
    {/* Suggested for You Section */}
    <div id="suggested">
      <div className="current-user">
        <img
          src="../../public/pics/profile_1.jpg"
          alt="Profile"
          className="profile-pic"
        />
        <div className="user-info">
          <strong>Vansh Singh</strong>
          <p>vansh_singh_787</p>
        </div>
        <a href="#">Switch</a>
      </div>
      <h4>
        Suggested for you{" "}
        <a href="#" className="see-all">
          See All
        </a>
      </h4>
      <div
        className="suggestion profile-link"
        data-name="ld.gurveeer"
        data-pic="../../public/pics/demo_1.jpg"
      >
        <img
          src="../../public/pics/demo_1.jpg"
          alt="ld.gurveeer"
          className="profile-pic"
        />
        <div>
          <strong>ld.gurveeer</strong>
          <p>Followed by priyanshi.dhall_</p>
        </div>
        <a href="#">Follow</a>
      </div>
      <div
        className="suggestion profile-link"
        data-name="naman1621"
        data-pic="../../public/pics/demo_2.jpg"
      >
        <img src="../../public/pics/demo_2.jpg" alt="naman1621" className="profile-pic" />
        <div>
          <strong>naman1621</strong>
          <p>Followed by _harshitjangta_ + 2</p>
        </div>
        <a href="#">Follow</a>
      </div>
      <div
        className="suggestion profile-link"
        data-name="itsharman_03"
        data-pic="../../public/pics/demo_3.jpg"
      >
        <img
          src="../../public/pics/demo_3.jpg"
          alt="itsharman_03"
          className="profile-pic"
        />
        <div>
          <strong>itsharman_03</strong>
          <p>Followed by _harshitjangta_ + 2</p>
        </div>
        <a href="#">Follow</a>
      </div>
      <div
        className="suggestion profile-link"
        data-name="tanush_520"
        data-pic="../../public/pics/demo_4.jpg"
      >
        <img
          src="../../public/pics/demo_4.jpg"
          alt="tanush_520"
          className="profile-pic"
        />
        <div>
          <strong>tanush_520</strong>
          <p>Followed by ananyaguptaa16 + ...</p>
        </div>
        <a href="#">Follow</a>
      </div>
      <div
        className="suggestion profile-link"
        data-name="anand_akash07"
        data-pic="../../public/pics/demo_5.jpg"
      >
        <img
          src="../../public/pics/demo_5.jpg"
          alt="anand_akash07"
          className="profile-pic"
        />
        <div>
          <strong>anand_akash07</strong>
          <p>Followed by chitkarafresherss_2</p>
        </div>
        <a href="#">Follow</a>
      </div>
      <footer>
        <p>
          About · Help · Press · API · Jobs · Privacy · Terms · Locations ·
          Language · Meta Verified
        </p>
        <p>© 2025 INSTAGRAM FROM META</p>
      </footer>
      {/* Floating Message Bar */}
      <div className="popup-bar" onclick="togglePopup()">
        <div className="icon">
          {/* <span class="badge">5</span> */}
          <i className="fab fa-facebook-messenger" />
        </div>
        <span className="label">Messages</span>
        <div className="avatars">
          <img src="../../public/pics/profile_2.jpg" alt="" />
          <img src="../../public/pics/profile_5.jpg" alt="" />
          <img src="../../public/pics/profile_3.jpg" alt="" />
          <div className="more">...</div>
        </div>
      </div>
      {/* Popup Window */}
      <div className="popup-window" id="popupWindow">
        <div className="popup-header">
          <div>
            Messages <span>4</span>
          </div>
          <button onclick="togglePopup()">✖</button>
        </div>
        <div className="message">
          <img src="../../public/pics/profile_6.jpg" alt="" />
          <div className="details">
            <p>
              <bold>Mohit</bold>
            </p>
            <p>
              Mohit sent an attachment <small>1h</small>
            </p>
          </div>
          <div className="unread-dot" />
        </div>
        <div className="message">
          <img src="../../public/pics/profile_4.jpg" alt="" />
          <div className="details">
            <p>
              <bold>Lovepreet</bold>
            </p>
            <p>
              Lovepreet sent an attachment <small>1h</small>
            </p>
          </div>
          <div className="unread-dot" />
        </div>
        <div className="message">
          <img src="../../public/pics/profile_7.jpg" alt="" />
          <div className="details">
            <p>
              <bold>Mohit</bold>
            </p>
            <p>
              Mohit sent an attachment <small>1h</small>
            </p>
          </div>
          <div className="unread-dot" />
        </div>
        <div className="message">
          <img src="../../public/pics/profile_5.jpg" alt="" />
          <div className="details">
            <p>
              <bold>Nishchal</bold>
            </p>
            <p>
              Nishchal sent an attachment <small>1h</small>
            </p>
          </div>
          <div className="unread-dot" />
        </div>
        <div className="message">
          <img src="../../public/pics/profile_3.jpg" alt="" />
          <div className="details">
            <p>
              <bold>Lucky</bold>
            </p>
            <p>
              Lucky sent an attachment <small>3h</small>
            </p>
          </div>
          {/* <div class="unread-dot"></div> */}
        </div>
        <div className="message">
          <img src="../../public/pics/profile_2.jpg" alt="" />
          <div className="details">
            <p>
              <bold>Ishpreet Singh</bold>
            </p>
            <p>
              Ishpreet Singh sent an attachment <small>10h</small>
            </p>
          </div>
        </div>
      </div>
      <div id="sharePopup" className="popup">
        <div className="popup-content">
          <span className="close" onclick="closePopup('sharePopup')">
            ×
          </span>
          <h2>Share Reel</h2>
          <input type="text" placeholder="Search user..." id="searchUser" />
          <div className="share-list">
            <div className="user">
              <img src="../../public/pics/profile_2.jpg" alt="" />
              <p>Ishpreet Singh</p>
            </div>
            <div className="user">
              <img src="../../public/pics/profile_6.jpg" alt="" />
              <p>Mohit</p>
            </div>
            <div className="user">
              <img src="../../public/pics/profile_5.jpg" alt="" />
              <p>Nishchal</p>
            </div>
            <div className="user">
              <img src="../../public/pics/profile_3.jpg" alt="" />
              <p>Lucky Arora</p>
            </div>
            <div className="user">
              <img src="../../public/pics/profile_11.jpg" alt="" />
              <p>Kanav</p>
            </div>
            <div className="user">
              <img src="../../public/pics/profile_10.jpg" alt="" />
              <p>Lavnish</p>
            </div>
          </div>
          <div className="share-options">
            <button>
              <i className="fas fa-link" /> Copy Link
            </button>
            <button>
              <i className="fab fa-facebook" /> Facebook
            </button>
            <button>
              <i className="fab fa-whatsapp" /> WhatsApp
            </button>
            <button>
              <i className="fas fa-envelope" /> Email
            </button>
            <button>
              <i className="fab fa-x-twitter" /> X
            </button>
          </div>
        </div>
      </div>
    </div>
    {/*  */}
  </div>
</>

  );
}
