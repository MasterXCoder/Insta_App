import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  FaMoon,
  FaSun,
  FaCog,
  FaBookmark,
  FaFlag,
  FaSignOutAlt,
  FaUserCircle,
  FaChartLine,
} from "react-icons/fa";

export default function Sidebar({ onSearchClick, onNotificationClick, onCreateClick }) {
  const navigate = useNavigate();
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.body.setAttribute('data-theme', 'light');
    } else {
      setIsDarkMode(true);
      document.body.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleMoreMenu = (e) => {
    e.preventDefault();
    setShowMoreMenu(!showMoreMenu);
  };

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleLogout = () => {
    // Clear session data
    sessionStorage.clear();
    localStorage.removeItem('currentUser');
    
    // Navigate to login page
    navigate('/');
    
    // Close the menu
    setShowMoreMenu(false);
  };

  return (
    <>
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
            <a href="#more" className="main_more" onClick={toggleMoreMenu}>
              <FaBars />
              <span id="dis">More</span>
            </a>
          </nav>
        </header>
      </div>

      {/* More Menu Popup */}
      {showMoreMenu && (
        <>
          <div 
            className="sidebarMore__overlay" 
            onClick={() => setShowMoreMenu(false)}
          ></div>
          <div className="sidebarMore__menu">
            {/* Settings */}
            <div className="sidebarMore__item" onClick={() => setShowMoreMenu(false)}>
              <div className="sidebarMore__itemContent">
                <div className="sidebarMore__icon">
                  <FaCog size={20} />
                </div>
                <span className="sidebarMore__text">Settings</span>
              </div>
            </div>

            {/* Your Activity */}
            <div className="sidebarMore__item" onClick={() => setShowMoreMenu(false)}>
              <div className="sidebarMore__itemContent">
                <div className="sidebarMore__icon">
                  <FaChartLine size={20} />
                </div>
                <span className="sidebarMore__text">Your activity</span>
              </div>
            </div>

            {/* Saved */}
            <div className="sidebarMore__item" onClick={() => setShowMoreMenu(false)}>
              <div className="sidebarMore__itemContent">
                <div className="sidebarMore__icon">
                  <FaBookmark size={20} />
                </div>
                <span className="sidebarMore__text">Saved</span>
              </div>
            </div>

            {/* Switch Appearance */}
            <div 
              className="sidebarMore__item" 
              onClick={toggleTheme}
            >
              <div className="sidebarMore__itemContent">
                <div className="sidebarMore__icon">
                  {isDarkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
                </div>
                <span className="sidebarMore__text">Switch appearance</span>
              </div>
            </div>

            {/* Report a Problem */}
            <div className="sidebarMore__item" onClick={() => setShowMoreMenu(false)}>
              <div className="sidebarMore__itemContent">
                <div className="sidebarMore__icon">
                  <FaFlag size={20} />
                </div>
                <span className="sidebarMore__text">Report a problem</span>
              </div>
            </div>

            {/* Divider */}
            <div className="sidebarMore__divider"></div>

            {/* Switch Accounts */}
            <div className="sidebarMore__item" onClick={() => setShowMoreMenu(false)}>
              <div className="sidebarMore__itemContent">
                <span className="sidebarMore__textOnly">Switch accounts</span>
              </div>
            </div>

            {/* Divider */}
            <div className="sidebarMore__divider"></div>

            {/* Log Out */}
            <div className="sidebarMore__item" onClick={handleLogout}>
              <div className="sidebarMore__itemContent">
                <span className="sidebarMore__textOnly">Log out</span>
              </div>
            </div>
          </div>
        </>
      )}

      <style>{`
        /* Theme Variables */
        body[data-theme="dark"] {
          --bg-primary: #000000;
          --bg-secondary: #121212;
          --bg-tertiary: #1e1e1e;
          --text-primary: #ffffff;
          --text-secondary: #a8a8a8;
          --border-color: #333333;
          --hover-bg: #262626;
        }

        body[data-theme="light"] {
          --bg-primary: #ffffff;
          --bg-secondary: #fafafa;
          --bg-tertiary: #f0f0f0;
          --text-primary: #000000;
          --text-secondary: #737373;
          --border-color: #dbdbdb;
          --hover-bg: #efefef;
        }

        /* Apply theme to body and main elements */
        body {
          background-color: var(--bg-primary) !important;
          color: var(--text-primary) !important;
        }

        #main_nav {
          background-color: var(--bg-primary) !important;
          border-right: 1px solid var(--border-color) !important;
        }

        #main_nav nav a {
          color: var(--text-primary) !important;
        }

        #main_nav nav a:hover {
          background-color: var(--hover-bg) !important;
        }

        .logo {
          color: var(--text-primary) !important;
        }

        /* More Menu Overlay */
        .sidebarMore__overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          z-index: 2999;
        }

        /* More Menu Popup */
        .sidebarMore__menu {
          position: fixed;
          bottom: 80px;
          left: 20px;
          width: 266px;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          z-index: 3000;
          padding: 8px 0;
          animation: slideUpFade 0.2s ease;
        }

        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Menu Item */
        .sidebarMore__item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px;
          cursor: pointer;
          transition: background 0.2s;
        }

        .sidebarMore__item:hover {
          background: var(--hover-bg);
        }

        .sidebarMore__itemContent {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
        }

        .sidebarMore__icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
        }

        .sidebarMore__text {
          font-size: 14px;
          font-weight: 400;
          color: var(--text-primary);
        }

        .sidebarMore__textOnly {
          font-size: 14px;
          font-weight: 400;
          color: var(--text-primary);
        }

        /* Divider */
        .sidebarMore__divider {
          height: 6px;
          background: var(--border-color);
          margin: 4px 0;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .sidebarMore__menu {
            left: 10px;
            bottom: 70px;
          }
        }
      `}</style>
    </>
  );
}