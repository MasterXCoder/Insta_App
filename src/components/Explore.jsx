import React, { useState } from 'react';
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
import '../css/explore.css';

const Explore = () => {
  const [viewerVisible, setViewerVisible] = useState(false);
  const [currentReel, setCurrentReel] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');
  const [likes, setLikes] = useState(0);

  const reelData = [
    {
      video: "../video/sample_8.mp4",
      avatar: "../pics/profile_2.jpg",
      user: "techguru99",
      caption: "Amazing tech content! 🚀",
      hashtags: "#tech #innovation #coding #developer #webdev #javascript #programming",
      likes: 4000,
      comments: [
        { user: "livesania", text: "This is incredible! 🔥", avatar: "../pics/profile_3.jpg" },
        { user: "persuasii", text: "Love it! 😍", avatar: "../pics/profile_4.jpg" },
        { user: "simplyshivan_", text: "So inspiring! 💯", avatar: "../pics/profile_5.jpg" }
      ]
    },
    {
      video: "../video/sample_10.mp4",
      avatar: "../pics/profile_6.jpg",
      user: "travelvlogger",
      caption: "Exploring new horizons! 🌍✈️",
      hashtags: "#travel #adventure #explore #wanderlust #traveling #vacation",
      likes: 9000,
      comments: [
        { user: "maria", text: "Where is this place? 🤩", avatar: "../pics/profile_3.jpg" },
        { user: "john_doe", text: "Amazing views! 🏔️", avatar: "../pics/profile_4.jpg" }
      ]
    },
    {
      video: "../video/sample_4.mp4",
      avatar: "../pics/profile_2.jpg",
      user: "fitnessfam",
      caption: "Never give up! 💪",
      hashtags: "#fitness #gym #workout #motivation #fit #health #bodybuilding",
      likes: 45000,
      comments: [
        { user: "gymrat", text: "Beast mode! 🦁", avatar: "../pics/profile_5.jpg" },
        { user: "healthylife", text: "Inspiring! 👏", avatar: "../pics/profile_3.jpg" }
      ]
    },
    {
      video: "../video/sample_7.mp4",
      avatar: "../pics/profile_4.jpg",
      user: "cookinglove",
      caption: "Easy recipe for dinner tonight! 🍝",
      hashtags: "#cooking #recipe #food #foodie #chef #delicious #homemade",
      likes: 459,
      comments: [
        { user: "foodlover", text: "Looks delicious! 🤤", avatar: "../pics/profile_3.jpg" }
      ]
    },
    {
      video: "../video/sample_5.mp4",
      avatar: "../pics/profile_5.jpg",
      user: "musicvibes",
      caption: "Feel the rhythm! 🎵",
      hashtags: "#music #musician #guitar #song #livemusic #musiclife #artist",
      likes: 49000,
      comments: [
        { user: "guitarist", text: "Such talent! 🎸", avatar: "../pics/profile_4.jpg" },
        { user: "musicfan", text: "On repeat! 🔁", avatar: "../pics/profile_5.jpg" }
      ]
    },
    {
      video: "../video/sample_6.mp4",
      avatar: "../pics/profile_2.jpg",
      user: "laniechurco",
      caption: "The end 😂😂",
      hashtags: "#babiesofinstagram #baby #babyfever #spoiled #momsofig #mom #dad #dadsofig #dadsofinstagram #reels #trend #viral",
      likes: 60392,
      comments: [
        { user: "livesania", text: "He's absolutely adorable, help! 😭💖", avatar: "../pics/profile_3.jpg" },
        { user: "persuasii", text: "😂💖", avatar: "../pics/profile_4.jpg" },
        { user: "simplyshivan_", text: "He's so grown up 😭🥲💖", avatar: "../pics/profile_5.jpg" }
      ]
    },
    {
      video: "../video/sample_9.mp4",
      avatar: "../pics/profile_3.jpg",
      user: "naturelover",
      caption: "Nature at its finest! 🌿🌺",
      hashtags: "#nature #wildlife #photography #naturephotography #beautiful #earth #green",
      likes: 459000,
      comments: [
        { user: "photoexpert", text: "Stunning capture! 📸", avatar: "../pics/profile_4.jpg" },
        { user: "earthlover", text: "Breathtaking! 🌎", avatar: "../pics/profile_5.jpg" }
      ]
    },
    {
      video: "../video/sample_2.mp4",
      avatar: "../pics/profile_6.jpg",
      user: "dancequeen",
      caption: "Dancing through life! 💃✨",
      hashtags: "#dance #dancer #dancing #choreography #dancersofinstagram #ballet",
      likes: 9000,
      comments: [
        { user: "dancefan", text: "Perfect moves! 👯", avatar: "../pics/profile_3.jpg" }
      ]
    },
    {
      video: "../video/sample_3.mp4",
      avatar: "../pics/profile_2.jpg",
      user: "artcreator",
      caption: "Creating magic with colors! 🎨",
      hashtags: "#art #artist #artwork #painting #creative #design #illustration",
      likes: 5000,
      comments: [
        { user: "artlover", text: "Beautiful work! 🖼️", avatar: "../pics/profile_4.jpg" }
      ]
    },
    {
      video: "../video/sample_7.mp4",
      avatar: "../pics/profile_4.jpg",
      user: "petlover",
      caption: "Cuteness overload! 🐶❤️",
      hashtags: "#pets #dog #puppy #dogsofinstagram #cute #petlove",
      likes: 45,
      comments: [
        { user: "doglover", text: "Adorable! 😍", avatar: "../pics/profile_5.jpg" }
      ]
    },
    {
      video: "../video/sample_1.mp4",
      avatar: "../pics/profile_5.jpg",
      user: "fashionista",
      caption: "Style is eternal! 👗✨",
      hashtags: "#fashion #style #ootd #fashionblogger #outfitoftheday #trending",
      likes: 49000,
      comments: [
        { user: "stylequeen", text: "Love this look! 👠", avatar: "../pics/profile_3.jpg" }
      ]
    }
  ];

  const handleGridItemClick = (index) => {
    const data = reelData[index % reelData.length];
    setCurrentReel(data);
    setComments(data.comments);
    setLikes(data.likes);
    setIsLiked(false);
    setIsSaved(false);
    setIsFollowing(false);
    setViewerVisible(true);
  };

  const closeViewer = () => {
    setViewerVisible(false);
    setCurrentReel(null);
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const handleSaveToggle = () => {
    setIsSaved(!isSaved);
  };

  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);
  };

  const handlePostComment = () => {
    if (commentInput.trim()) {
      const newComment = {
        user: "you",
        text: commentInput,
        avatar: "../pics/profile_1.jpg"
      };
      setComments([...comments, newComment]);
      setCommentInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handlePostComment();
    }
  };

  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && viewerVisible) {
        closeViewer();
      }
    };

    const handleSpace = (e) => {
      if (e.code === 'Space' && viewerVisible) {
        e.preventDefault();
        handleMuteToggle();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('keydown', handleSpace);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleSpace);
    };
  }, [viewerVisible, isMuted]);

  return (
    <div className="main">
      <div id="main_page">
        <div id="main_nav">
          <header>
            <a href="#" className="logo">Instagram</a>
            <nav>
          <a href="/Home"><FaHome /><span id="dis">Home</span></a>
          <a href="#search"><FaSearch /><span id="dis">Search</span></a>
          <a href="/explore"><FaCompass /><span id="dis">Explore</span></a>
          <a href="/reels"><FaVideo /><span id="dis">Reels</span></a>
          <a href="Messages" ><FaFacebookMessenger /><span id="dis">Messages</span></a>
          <a href="/notification"><FaHeart /><span id="dis">Notifications</span></a>
          <a href="Create"><FaPlusSquare /><span id="dis">Create</span></a>
          <a href="/Profile"><img src="/pics/profile_1.jpg" alt="Profile" className="icon" style={{ borderRadius: "50%" }} /><span id="dis">Profile</span></a>
          <a href="#"><FaBars /><span id="dis">More</span></a>
          </nav>
          </header>
        </div>

        <div className="Mid">
          <div className="viewer" role="main" style={{display: viewerVisible ? 'flex' : 'none'}} onClick={(e) => e.target.className === 'viewer' && closeViewer()}>
            <div className="left" aria-hidden="false">
              <video id="reelVideo" className="reel-video" playsInline muted={isMuted} loop autoPlay>
                {currentReel && <source src={currentReel.video} type="video/mp4" />}
                Your browser doesn't support HTML5 video.
              </video>

              <div className="video-overlay">
                <button id="muteBtn" className="mute-btn" title="Toggle sound (space)" onClick={handleMuteToggle} style={{opacity: isMuted ? '0.6' : '1'}}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 5L6 9H2v6h4l5 4V5z" />
                    <path id="soundWave" d="M19 9a4 4 0 0 1 0 6" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="right" aria-label="Comments panel">
              <div className="header">
                <img id="authorAvatar" className="avatar" src={currentReel?.avatar} alt="author avatar" />
                <div className="user-block">
                  <div className="name">
                    <span id="authorName">{currentReel?.user}</span>
                    <span title="verified" className="verified">✓</span>
                    <small style={{color: 'var(--muted)', marginLeft: '8px', fontWeight: '600'}}>• Follow</small>
                  </div>
                  <div style={{color: 'var(--muted)', fontSize: '13px'}}>Funny Song Studio, Sounds Reel</div>
                </div>
                <button className="follow-btn" id="followBtn" onClick={handleFollowToggle} style={{color: isFollowing ? 'var(--muted)' : '#39a0ff'}}>
                  {isFollowing ? 'Following' : 'Follow'}
                </button>
              </div>

              <div className="meta">
                <div className="caption" id="mainCaption">
                  {currentReel?.caption}
                </div>
                <div className="hashtags" id="hashTags">
                  {currentReel?.hashtags}
                </div>
              </div>

              <div className="comments-wrap" id="commentsWrap" aria-live="polite">
                {comments.map((comment, index) => (
                  <div key={index} className="comment">
                    <img src={comment.avatar} alt="avatar" />
                    <div className="cbody"><strong>{comment.user}</strong> {comment.text}</div>
                  </div>
                ))}
              </div>

              <div className="bottom-meta">
                <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                  <button id="likeBtn" className={`icon-btn like ${isLiked ? 'active' : ''}`} aria-pressed={isLiked} title="Like" onClick={handleLikeToggle}>
                    <svg className="heart" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M12 21s-7-4.44-9-7.26C-0.2 9.28 3 5 6.5 6.3 8 7.05 9 8.2 12 10.9 15 8.2 16 7.05 17.5 6.3 21 5 24.2 9.28 21 13.74 19 16 12 21 12 21z" />
                    </svg>
                  </button>
                  <div className="likes-count" id="likesCount">{likes.toLocaleString()} likes</div>
                </div>

                <div style={{marginLeft: 'auto', display: 'flex', gap: '6px', alignItems: 'center'}}>
                  <button className="icon-btn" id="saveBtn" title="Save" onClick={handleSaveToggle}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill={isSaved ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.6">
                      <path d="M6 2h12v18l-6-3-6 3V2z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="comment-input-wrap">
                <input 
                  id="commentInput" 
                  className="comment-input" 
                  placeholder="Add a comment..." 
                  aria-label="Add a comment"
                  value={commentInput}
                  onChange={(e) => setCommentInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <button id="postBtn" className="post-btn" onClick={handlePostComment}>Post</button>
              </div>
            </div>
          </div>

          <div className="explore-grid" style={{display: viewerVisible ? 'none' : 'grid'}}>
            <div className="grid-item video-item" onClick={() => handleGridItemClick(0)}>
              <video src="../video/sample_8.mp4" autoPlay loop muted></video>
              <div className="overlay-stats">
                <span><i className="fas fa-heart"></i> 4K</span>
                <span><i className="fas fa-comment"></i> 40</span>
              </div>
            </div>

            <div className="grid-item video-item" onClick={() => handleGridItemClick(1)}>
              <video src="../video/sample_10.mp4" autoPlay loop muted></video>
              <div className="overlay-stats">
                <span><i className="fas fa-heart"></i> 9K</span>
                <span><i className="fas fa-comment"></i> 40</span>
              </div>
            </div>

            <div className="grid-item video-item" onClick={() => handleGridItemClick(2)}>
              <video src="../video/sample_4.mp4" autoPlay loop muted></video>
              <div className="overlay-stats">
                <span><i className="fas fa-heart"></i> 45K</span>
                <span><i className="fas fa-comment"></i> 4</span>
              </div>
            </div>

            <div className="grid-item video-item" onClick={() => handleGridItemClick(3)}>
              <video src="../video/sample_7.mp4" autoPlay loop muted></video>
              <div className="overlay-stats">
                <span><i className="fas fa-heart"></i> 459</span>
                <span><i className="fas fa-comment"></i> 0</span>
              </div>
            </div>

            <div className="grid-item video-item" onClick={() => handleGridItemClick(4)}>
              <video src="../video/sample_5.mp4" autoPlay loop muted></video>
              <div className="overlay-stats">
                <span><i className="fas fa-heart"></i> 49K</span>
                <span><i className="fas fa-comment"></i> 80</span>
              </div>
            </div>

            <div className="grid-item video-item" onClick={() => handleGridItemClick(5)}>
              <video src="../video/sample_6.mp4" autoPlay loop muted></video>
              <div className="overlay-stats">
                <span><i className="fas fa-heart"></i> 4K</span>
                <span><i className="fas fa-comment"></i> 408</span>
              </div>
            </div>

            <div className="grid-item video-item" onClick={() => handleGridItemClick(6)}>
              <video src="../video/sample_9.mp4" autoPlay loop muted></video>
              <div className="overlay-stats">
                <span><i className="fas fa-heart"></i> 459K</span>
                <span><i className="fas fa-comment"></i> 4,080</span>
              </div>
            </div>

            <div className="grid-item video-item" onClick={() => handleGridItemClick(7)}>
              <video src="../video/sample_2.mp4" autoPlay loop muted></video>
              <div className="overlay-stats">
                <span><i className="fas fa-heart"></i> 9K</span>
                <span><i className="fas fa-comment"></i> 80</span>
              </div>
            </div>

            <div className="grid-item video-item" onClick={() => handleGridItemClick(8)}>
              <video src="../video/sample_3.mp4" autoPlay loop muted></video>
              <div className="overlay-stats">
                <span><i className="fas fa-heart"></i> 5K</span>
                <span><i className="fas fa-comment"></i> 48</span>
              </div>
            </div>

            <div className="grid-item video-item" onClick={() => handleGridItemClick(9)}>
              <video src="../video/sample_7.mp4" autoPlay loop muted></video>
              <div className="overlay-stats">
                <span><i className="fas fa-heart"></i> 45</span>
                <span><i className="fas fa-comment"></i> 4</span>
              </div>
            </div>

            <div className="grid-item video-item" onClick={() => handleGridItemClick(10)}>
              <video src="../video/sample_1.mp4" autoPlay loop muted></video>
              <div className="overlay-stats">
                <span><i className="fas fa-heart"></i> 49K</span>
                <span><i className="fas fa-comment"></i> 400</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;