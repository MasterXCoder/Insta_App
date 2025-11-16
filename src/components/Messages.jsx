import React, { useState, useEffect, useRef } from "react";
import styles from "../css/messages.module.css";
import {
  FaInstagram,
  FaSearch,
  FaCompass,
  FaVideo,
  FaFacebookMessenger,
  FaHeart,
  FaPlusSquare,
  FaBars,
  FaPhone,
  FaEllipsisH,
  FaSmile,
  FaImage,
  FaReply
} from "react-icons/fa";

// ----------------------- MAIN COMPONENT -----------------------
export default function Messages() {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [reelsData, setReelsData] = useState([]);
  const chatAreaRef = useRef(null);

  const messages = [
    { id: 1, username: "Ishpreet Singh", image: "/pics/profile_2.jpg", preview: "You sent an attachment · 28m" },
    { id: 2, username: "Mohit Chaudhary", image: "/pics/profile_7.jpg", preview: "You sent an attachment · 48m" },
    { id: 3, username: "mohit", image: "/pics/profile_6.jpg", preview: "You sent an attachment · 1h" },
    { id: 4, username: "Lucky Arora", image: "/pics/profile_3.jpg", preview: "You sent an attachment · 2h" },
    { id: 5, username: "Madhav", image: "/pics/profile_8.jpg", preview: "Liked a message · 3h" },
    { id: 6, username: "Lovepreet", image: "/pics/profile_4.jpg", preview: "ok · 8h" },
    { id: 7, username: "Nishchal", image: "/pics/profile_5.jpg", preview: "done · 8h" },
  ];

  const reels = [
    "/video/sample_6.mp4",
    "/video/sample_7.mp4",
    "/video/sample_8.mp4",
    "/video/sample_9.mp4",
    "/video/sample_10.mp4",
  ];

  const reelsNames = [
    "vansh_singh_02",
    "karan_086",
    "arman@165",
    "ritu_goyal_art",
    "mountain_skier",
  ];

  // Get random unique items from array
  const getRandomUniqueItems = (arr, count) => {
    const copy = [...arr];
    const result = [];
    while (result.length < count && copy.length) {
      const idx = Math.floor(Math.random() * copy.length);
      result.push(copy.splice(idx, 1)[0]);
    }
    while (result.length < count) {
      result.push(arr[Math.floor(Math.random() * arr.length)]);
    }
    return result;
  };

  // Choose side randomly
  const chooseSideRandomly = () => {
    return Math.random() < 0.5 ? "right" : "left";
  };

  // Handle person click
  const handlePersonClick = (person) => {
    setSelectedPerson(person);

    // Get random reels and names
    const randomReels = getRandomUniqueItems(reels, 2);
    const randomNames = getRandomUniqueItems(reelsNames, 2);

    // Map reels with side and name
    const selectedReels = randomReels.map((src, i) => ({
      src,
      name: randomNames[i],
      side: chooseSideRandomly(),
      profilePic: person.image,
    }));

    setReelsData(selectedReels);

    // Scroll to top
    setTimeout(() => chatAreaRef.current?.scrollTo({ top: 0 }), 100);
  };

  return (
    <div className={styles.messagesPage}>
      {/* Left Sidebar Navigation */}
      <div className={styles.mainNav}>
        <header className={styles.header}>
          <a className={styles.logo}>
            <FaInstagram size={26} />
          </a>
          <nav className={styles.nav}>
            <a href="/home">
              <svg aria-label="/Home" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
                <title>Home</title>
                <path d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </a>
            <a href="#search">
              <svg aria-label="Search" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
                <title>Search</title>
                <path d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="16.511" x2="22" y1="16.511" y2="22"></line>
              </svg>
            </a>
            <a href="explore.html">
              <svg aria-label="Explore" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
                <title>Explore</title>
                <polygon fill="none" points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon>
                <polygon fillRule="evenodd" points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"></polygon>
                <circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle>
              </svg>
            </a>
            <a href="reel.html">
              <svg aria-label="Reels" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
                <title>Reels</title>
                <line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="2.049" x2="21.95" y1="7.002" y2="7.002"></line>
                <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="13.504" x2="16.362" y1="2.001" y2="7.002"></line>
                <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="7.207" x2="10.002" y1="2.11" y2="7.002"></line>
                <path d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                <path d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z" fillRule="evenodd"></path>
              </svg>
            </a>
            <a href="message.html">
              <svg aria-label="Messenger" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
                <title>Messenger</title>
                <path d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.739"></path>
                <path d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z" fillRule="evenodd"></path>
              </svg>
            </a>
            <a href="notification.html">
              <svg aria-label="Notifications" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
                <title>Notifications</title>
                <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
              </svg>
            </a>
            <a href="#create">
              <svg aria-label="New post" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
                <title>New post</title>
                <path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line>
                <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line>
              </svg>
            </a>
            <a href="/profile">
              <img src="/pics/profile_1.jpg" alt="Profile" className={styles.icon} style={{ borderRadius: "50%" }} width="26" />
            </a>
            <a href="#more">
              <FaBars size={22} />
            </a>
          </nav>
        </header>
      </div>

      {/* Messages Main Container */}
      <div className={styles.messagesMain}>
        {/* Left Sidebar - Messages List */}
        <div className={styles.sidebar}>
          {/* Sidebar Header with Search */}
          <header className={styles.sidebarHeader}>
            <div className={styles.searchContainer}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.searchIcon}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <input type="text" className={styles.searchInput} placeholder="Search" />
            </div>
          </header>

          {/* Notes Section */}
          <section className={styles.notesSection}>
            <div className={styles.notes}>
              <span className={styles.noteBubble}>Note...</span>
              <img src="/pics/profile_1.jpg" alt="Your Note" className={styles.noteImg} />
              <span className={styles.noteUsername}>Your note</span>
            </div>
            <div className={styles.notes}>
              <span className={styles.noteBubble}>Rao Sahab</span>
              <img src="/pics/profile_5.jpg" alt="Nishchal's Note" className={styles.noteImg} />
              <span className={styles.noteUsername}>Nishchal</span>
            </div>
            <div className={styles.notes}>
              <span className={styles.noteBubble}>Radhe radhe</span>
              <img src="/pics/profile_9.jpg" alt="Mani's Note" className={styles.noteImg} />
              <span className={styles.noteUsername}>Mani</span>
            </div>
          </section>

          {/* Messages Container */}
          <div className={styles.messagesContainer}>
            <header className={styles.messagesListHeader}>
              <h2 className={styles.messagesTitle}>Messages</h2>
              <a href="#" className={styles.requestsLink}>Requests</a>
            </header>

            <div className={styles.messagesList}>
              {messages.map((person) => (
                <div
                  key={person.id}
                  className={styles.messagePerson}
                  onClick={() => handlePersonClick(person)}
                >
                  <img src={person.image} alt={person.username} className={styles.personImage} />
                  <div className={styles.personDetails}>
                    <div className={styles.personUsername}>{person.username}</div>
                    <div className={styles.personPreview}>{person.preview}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Chat Area */}
        <main className={styles.chatAreaMain}>
          {!selectedPerson ? (
            <div className={styles.emptyChat}>
              <div className={styles.emptyChatIcon}>
                <FaFacebookMessenger size={60} />
              </div>
              <h1 className={styles.emptyChatTitle}>Your messages</h1>
              <p className={styles.emptyChatSubtitle}>Send a message to start a chat.</p>
              <button className={styles.sendMessageButton}>Send message</button>
            </div>
          ) : (
            <div className={styles.rightMainChat}>
              {/* Chat Header */}
              <div className={styles.chatHeading}>
                <div className={styles.chatHeadingUserinfo}>
                  <img src={selectedPerson.image} alt={selectedPerson.username} width="40" height="40" />
                  <span className={styles.chatUserName}>{selectedPerson.username}</span>
                </div>
                <div className={styles.chatHeadingIcons}>
                  <button className={styles.iconButton}>
                    <FaPhone size={20} />
                  </button>
                  <button className={styles.iconButton}>
                    <FaVideo size={20} />
                  </button>
                  <button className={styles.iconButton}>
                    <FaEllipsisH size={20} />
                  </button>
                </div>
              </div>

              {/* Chat Area - Reels */}
              <div className={styles.chatArea} ref={chatAreaRef}>
                {reelsData.map((reel, i) => (
                  <ReelComponent key={i} reel={reel} styles={styles} />
                ))}
              </div>

              {/* Chat Message Input */}
              <div className={styles.chatAreaMessage}>
                <button className={styles.emojiButton}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="20" height="20">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                  </svg>
                </button>
                <input type="text" name="message" placeholder="Message" defaultValue="" />
                <button className={styles.voiceButton}>
                  <svg aria-label="Voice Clip" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="20" role="img" viewBox="0 0 24 24" width="20">
                    <title>Voice Clip</title>
                    <path d="M19.5 10.671v.897a7.5 7.5 0 0 1-15 0v-.897" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    <line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="19.068" y2="22"></line>
                    <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="8.706" x2="15.104" y1="22" y2="22"></line>
                    <path d="M12 15.745a4 4 0 0 1-4-4V6a4 4 0 0 1 8 0v5.745a4 4 0 0 1-4 4Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </button>
                <button className={styles.mediaButton}>
                  <svg aria-label="Add Photo or Video" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="20" role="img" viewBox="0 0 24 24" width="20">
                    <title>Add Photo or Video</title>
                    <path d="M6.549 5.013A1.557 1.557 0 1 0 8.106 6.57a1.557 1.557 0 0 0-1.557-1.557Z" fillRule="evenodd"></path>
                    <path d="m2 18.605 3.901-3.9a.908.908 0 0 1 1.284 0l2.807 2.806a.908.908 0 0 0 1.283 0l5.534-5.534a.908.908 0 0 1 1.283 0l3.905 3.905" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
                    <path d="M18.44 2.004A3.56 3.56 0 0 1 22 5.564h0v12.873a3.56 3.56 0 0 1-3.56 3.56H5.568a3.56 3.56 0 0 1-3.56-3.56V5.563a3.56 3.56 0 0 1 3.56-3.56Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </button>
                <button className={styles.stickerButton}>
                  <svg aria-label="Choose a GIF or sticker" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="20" role="img" viewBox="0 0 24 24" width="20">
                    <title>Choose a GIF or sticker</title>
                    <path d="M13.11 22H7.416A5.417 5.417 0 0 1 2 16.583V7.417A5.417 5.417 0 0 1 7.417 2h9.166A5.417 5.417 0 0 1 22 7.417v5.836a2.083 2.083 0 0 1-.626 1.488l-6.808 6.664A2.083 2.083 0 0 1 13.11 22Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    <circle cx="8.238" cy="9.943" r="1.335"></circle>
                    <circle cx="15.762" cy="9.943" r="1.335"></circle>
                    <path d="M15.174 15.23a4.887 4.887 0 0 1-6.937-.301" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    <path d="M22 10.833v1.629a1.25 1.25 0 0 1-1.25 1.25h-1.79a5.417 5.417 0 0 0-5.417 5.417v1.62a1.25 1.25 0 0 1-1.25 1.25H9.897" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

// ----------------------- Reel Component -----------------------
function ReelComponent({ reel, styles }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const p = videoRef.current?.play();
      if (p?.catch) p.catch(() => {});
    }, 50);
    return () => clearTimeout(timer);
  }, [reel.src]);

  return (
    <div className={reel.side === "right" ? styles.shortRight : styles.shortLeft}>
      <div className={styles.shortIcons}>
        <div className={styles.iconTooltip}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="18" height="18">
            <title>Reply</title>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
          </svg>
          <span className={styles.tooltipText}>More</span>
        </div>
        <div className={styles.iconTooltip}>
          <FaReply size={16} />
          <span className={styles.tooltipText}>Reply</span>
        </div>
        <div className={styles.iconTooltip}>
          <svg aria-label="Choose an emoji" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="18" role="img" viewBox="0 0 24 24" width="18">
            <title>Choose an emoji</title>
            <path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
          </svg>
          <span className={styles.tooltipText}>React</span>
        </div>
      </div>

      <div className={styles.videoContainer}>
        <div className={styles.videoHeader}>
          <img src={reel.profilePic} alt="Profile" className={styles.profilePic} />
          <span className={styles.profileName}>{reel.name}</span>
        </div>
        <video
          ref={videoRef}
          src={reel.src}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className={styles.reelsIcon}>
          <svg aria-label="Reels" fill="currentColor" height="32" role="img" viewBox="0 0 24 24" width="32">
            <title>Reels</title>
            <line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="2.049" x2="21.95" y1="7.002" y2="7.002"></line>
            <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="13.504" x2="16.362" y1="2.001" y2="7.002"></line>
            <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="7.207" x2="10.002" y1="2.11" y2="7.002"></line>
            <path d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            <path d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z" fillRule="evenodd"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
