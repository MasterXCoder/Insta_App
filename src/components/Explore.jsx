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
} from "react-icons/fa";
import '../css/explore.css';
import Sidebar from './Sidebar';
import Notification from './Notification';
import { Create } from './Home';

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
  const [showNotifications, setShowNotifications] = useState(false);
  const [showCreate, setShowCreate] = useState(false);

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

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const toggleCreate = () => {
    setShowCreate(!showCreate);
  };

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
    <div className="explore-main">
      <div id="explore_page">
        <Sidebar 
          onNotificationClick={toggleNotifications}
          onCreateClick={toggleCreate}
        />
        <Notification isOpen={showNotifications} onClose={toggleNotifications} />
        <Create 
          isOpen={showCreate} 
          onClose={() => setShowCreate(false)}
        />

        <div className="explore-content">
          <div className="reel-viewer" role="main" style={{display: viewerVisible ? 'flex' : 'none'}} onClick={(e) => e.target.className === 'reel-viewer' && closeViewer()}>
            <div className="viewer-left" aria-hidden="false">
              <video id="explore_reel_video" className="explore-reel-video" playsInline muted={isMuted} loop autoPlay>
                {currentReel && <source src={currentReel.video} type="video/mp4" />}
                Your browser doesn't support HTML5 video.
              </video>

              <div className="explore-video-overlay">
                <button id="explore_mute_btn" className="explore-mute-btn" title="Toggle sound (space)" onClick={handleMuteToggle} style={{opacity: isMuted ? '0.6' : '1'}}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 5L6 9H2v6h4l5 4V5z" />
                    <path id="explore_sound_wave" d="M19 9a4 4 0 0 1 0 6" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="viewer-right" aria-label="Comments panel">
              <div className="viewer-header">
                <img id="explore_author_avatar" className="viewer-avatar" src={currentReel?.avatar} alt="author avatar" />
                <div className="viewer-user-block">
                  <div className="viewer-name">
                    <span id="explore_author_name">{currentReel?.user}</span>
                    <span title="verified" className="viewer-verified">✓</span>
                    <small style={{color: 'var(--muted)', marginLeft: '8px', fontWeight: '600'}}>• Follow</small>
                  </div>
                  <div style={{color: 'var(--muted)', fontSize: '13px'}}>Funny Song Studio, Sounds Reel</div>
                </div>
                <button className="viewer-follow-btn" id="explore_follow_btn" onClick={handleFollowToggle} style={{color: isFollowing ? 'var(--muted)' : '#39a0ff'}}>
                  {isFollowing ? 'Following' : 'Follow'}
                </button>
              </div>

              <div className="viewer-meta">
                <div className="viewer-caption" id="explore_main_caption">
                  {currentReel?.caption}
                </div>
                <div className="viewer-hashtags" id="explore_hashtags">
                  {currentReel?.hashtags}
                </div>
              </div>

              <div className="viewer-comments-wrap" id="explore_comments_wrap" aria-live="polite">
                {comments.map((comment, index) => (
                  <div key={index} className="viewer-comment">
                    <img src={comment.avatar} alt="avatar" />
                    <div className="viewer-comment-body"><strong>{comment.user}</strong> {comment.text}</div>
                  </div>
                ))}
              </div>

              <div className="viewer-bottom-meta">
                <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                  <button id="explore_like_btn" className={`viewer-icon-btn viewer-like ${isLiked ? 'active' : ''}`} aria-pressed={isLiked} title="Like" onClick={handleLikeToggle}>
                    <svg className="viewer-heart" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M12 21s-7-4.44-9-7.26C-0.2 9.28 3 5 6.5 6.3 8 7.05 9 8.2 12 10.9 15 8.2 16 7.05 17.5 6.3 21 5 24.2 9.28 21 13.74 19 16 12 21 12 21z" />
                    </svg>
                  </button>
                  <div className="viewer-likes-count" id="explore_likes_count">{likes.toLocaleString()} likes</div>
                </div>

                <div style={{marginLeft: 'auto', display: 'flex', gap: '6px', alignItems: 'center'}}>
                  <button className="viewer-icon-btn" id="explore_save_btn" title="Save" onClick={handleSaveToggle}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill={isSaved ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.6">
                      <path d="M6 2h12v18l-6-3-6 3V2z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="viewer-comment-input-wrap">
                <input 
                  id="explore_comment_input" 
                  className="viewer-comment-input" 
                  placeholder="Add a comment..." 
                  aria-label="Add a comment"
                  value={commentInput}
                  onChange={(e) => setCommentInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <button id="explore_post_btn" className="viewer-post-btn" onClick={handlePostComment}>Post</button>
              </div>
            </div>
          </div>

          <div className="explore-grid" style={{display: viewerVisible ? 'none' : 'grid'}}>
            <div className="explore-grid-item explore-video-item" onClick={() => handleGridItemClick(0)}>
              <video src="../video/sample_8.mp4" autoPlay loop muted></video>
              <div className="explore-overlay-stats">
                <span><i className="fas fa-heart"></i> 4K</span>
                <span><i className="fas fa-comment"></i> 40</span>
              </div>
            </div>

            <div className="explore-grid-item explore-video-item" onClick={() => handleGridItemClick(1)}>
              <video src="../video/sample_10.mp4" autoPlay loop muted></video>
              <div className="explore-overlay-stats">
                <span><i className="fas fa-heart"></i> 9K</span>
                <span><i className="fas fa-comment"></i> 40</span>
              </div>
            </div>

            <div className="explore-grid-item explore-video-item" onClick={() => handleGridItemClick(2)}>
              <video src="../video/sample_4.mp4" autoPlay loop muted></video>
              <div className="explore-overlay-stats">
                <span><i className="fas fa-heart"></i> 45K</span>
                <span><i className="fas fa-comment"></i> 4</span>
              </div>
            </div>

            <div className="explore-grid-item explore-video-item" onClick={() => handleGridItemClick(3)}>
              <video src="../video/sample_7.mp4" autoPlay loop muted></video>
              <div className="explore-overlay-stats">
                <span><i className="fas fa-heart"></i> 459</span>
                <span><i className="fas fa-comment"></i> 0</span>
              </div>
            </div>

            <div className="explore-grid-item explore-video-item" onClick={() => handleGridItemClick(4)}>
              <video src="../video/sample_5.mp4" autoPlay loop muted></video>
              <div className="explore-overlay-stats">
                <span><i className="fas fa-heart"></i> 49K</span>
                <span><i className="fas fa-comment"></i> 80</span>
              </div>
            </div>

            <div className="explore-grid-item explore-video-item" onClick={() => handleGridItemClick(5)}>
              <video src="../video/sample_6.mp4" autoPlay loop muted></video>
              <div className="explore-overlay-stats">
                <span><i className="fas fa-heart"></i> 4K</span>
                <span><i className="fas fa-comment"></i> 408</span>
              </div>
            </div>

            <div className="explore-grid-item explore-video-item" onClick={() => handleGridItemClick(6)}>
              <video src="../video/sample_9.mp4" autoPlay loop muted></video>
              <div className="explore-overlay-stats">
                <span><i className="fas fa-heart"></i> 459K</span>
                <span><i className="fas fa-comment"></i> 4,080</span>
              </div>
            </div>

            <div className="explore-grid-item explore-video-item" onClick={() => handleGridItemClick(7)}>
              <video src="../video/sample_2.mp4" autoPlay loop muted></video>
              <div className="explore-overlay-stats">
                <span><i className="fas fa-heart"></i> 9K</span>
                <span><i className="fas fa-comment"></i> 80</span>
              </div>
            </div>

            <div className="explore-grid-item explore-video-item" onClick={() => handleGridItemClick(8)}>
              <video src="../video/sample_3.mp4" autoPlay loop muted></video>
              <div className="explore-overlay-stats">
                <span><i className="fas fa-heart"></i> 5K</span>
                <span><i className="fas fa-comment"></i> 48</span>
              </div>
            </div>

            <div className="explore-grid-item explore-video-item" onClick={() => handleGridItemClick(9)}>
              <video src="../video/sample_7.mp4" autoPlay loop muted></video>
              <div className="explore-overlay-stats">
                <span><i className="fas fa-heart"></i> 45</span>
                <span><i className="fas fa-comment"></i> 4</span>
              </div>
            </div>

            <div className="explore-grid-item explore-video-item" onClick={() => handleGridItemClick(10)}>
              <video src="../video/sample_1.mp4" autoPlay loop muted></video>
              <div className="explore-overlay-stats">
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