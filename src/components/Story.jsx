import React, { useState, useEffect, useRef } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import "../css/story.css";

export default function Story() {
  const stories = [
    { name: "Nishchal", profile: "/pics/profile_5.jpg", media: ["/pics/nishchal_3.jpg", "/video/car.mp4", "/pics/nishchal_2.jpg"] },
    { name: "Lucky Arora", profile: "/pics/profile_3.jpg", media: ["/pics/lucky_2.png", "/pics/lucky_3.png"] },
    { name: "Madhav", profile: "/pics/profile_8.jpg", media: ["/pics/pf_3_2.png", "/pics/pf_3_2.png", "/pics/post_2.png"] },
    { name: "Ishpreet Singh", profile: "/pics/profile_2.jpg", media: ["/pics/post_3.png", "/video/sample_5.mp4", "/video/sample_3.mp4"] },
    { name: "Lovepreet", profile: "/pics/profile_4.jpg", media: ["/pics/post_1.png", "/pics/post_1.png"] },
    { name: "Mohit", profile: "/pics/profile_6.jpg", media: ["/pics/post_3.png", "/video/sample_10.mp4", "/pics/post_5.png"] },
    { name: "Mikash", profile: "/pics/profile_9.jpg", media: ["/pics/post_1.png", "/pics/post_6.png"] },
    { name: "Lavnish", profile: "/pics/profile_10.jpg", media: ["/pics/post_2.png", "/video/sample_4.mp4", "/pics/post_7.png"] }
  ];

  const [profileIndex, setProfileIndex] = useState(0);
  const [mediaIndex, setMediaIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progressWidths, setProgressWidths] = useState({});

  const viewerRef = useRef(null);
  const videoRef = useRef(null);
  const progressIntervalRef = useRef(null);
  const progressStartTimeRef = useRef(null);

  // Center active story
  useEffect(() => {
    if (viewerRef.current) {
      const activeDiv = viewerRef.current.querySelector(".st1.active");
      if (activeDiv) {
        const offset = viewerRef.current.clientWidth / 2 - (activeDiv.offsetLeft + activeDiv.clientWidth / 2);
        viewerRef.current.style.transition = "transform 0.7s ease-in-out";
        viewerRef.current.style.transform = `translateX(${offset}px)`;
      }
    }
  }, [profileIndex, mediaIndex]);

  // Handle progress animation and auto-play
  useEffect(() => {
    // Clear previous interval
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }

    if (!isPlaying) {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      return;
    }

    const currentProfile = stories[profileIndex];
    const currentMedia = currentProfile.media[mediaIndex];
    const isVideo = currentMedia.endsWith('.mp4');

    let duration = 3000; // default for images

    if (isVideo && videoRef.current) {
      const video = videoRef.current;
      video.currentTime = 0;
      video.play().catch(() => {});
      
      const handleLoadedMetadata = () => {
        duration = (video.duration * 1000) || 3000;
        startProgress(duration);
      };

      if (video.readyState >= 1) {
        duration = (video.duration * 1000) || 3000;
        startProgress(duration);
      } else {
        video.addEventListener('loadedmetadata', handleLoadedMetadata, { once: true });
      }
    } else {
      startProgress(duration);
    }

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [isPlaying, profileIndex, mediaIndex]);

  const startProgress = (duration) => {
    progressStartTimeRef.current = Date.now();
    
    progressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - progressStartTimeRef.current;
      const percent = Math.min((elapsed / duration) * 100, 100);
      
      setProgressWidths(prev => ({
        ...prev,
        [mediaIndex]: percent
      }));

      if (percent >= 100) {
        clearInterval(progressIntervalRef.current);
        nextStory();
      }
    }, 50);
  };

  const nextStory = () => {
    const profile = stories[profileIndex];
    const nextMediaIndex = mediaIndex + 1;

    if (nextMediaIndex >= profile.media.length) {
      setMediaIndex(0);
      setProfileIndex((profileIndex + 1) % stories.length);
      setProgressWidths({});
    } else {
      setMediaIndex(nextMediaIndex);
    }
  };

  const prevStory = () => {
    const prevMediaIndex = mediaIndex - 1;

    if (prevMediaIndex < 0) {
      const prevProfileIndex = (profileIndex - 1 + stories.length) % stories.length;
      setProfileIndex(prevProfileIndex);
      setMediaIndex(stories[prevProfileIndex].media.length - 1);
      setProgressWidths({});
    } else {
      setMediaIndex(prevMediaIndex);
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const getStoryClass = (index) => {
    if (index === profileIndex) return "active";
    
    // Adjacent stories
    const prevIndex = (profileIndex - 1 + stories.length) % stories.length;
    const nextIndex = (profileIndex + 1) % stories.length;
    
    if (index === prevIndex) return "left";
    if (index === nextIndex) return "right";
    
    // All other stories based on their position relative to active
    if (index < profileIndex) return "far-left";
    return "far-right";
  };

  return (
    <div id="storyContainer">
      <div className="nav-btn left" onClick={(e) => { e.stopPropagation(); prevStory(); }}>
        ❮
      </div>

      <div id="storyViewer" ref={viewerRef} onClick={togglePlayPause}>
        {stories.map((profile, index) => {
          const storyClass = getStoryClass(index);
          const isActive = index === profileIndex;
          const currentMedia = isActive ? profile.media[mediaIndex] : profile.media[0];
          const isVideo = currentMedia.endsWith('.mp4');

          return (
            <div key={index} className={`st1 ${storyClass}`}>
              {isActive && (
                <>
                  {/* Progress bars */}
                  <div className="progress-container">
                    {profile.media.map((_, i) => (
                      <div key={i} className="progress-bar">
                        <div
                          className="progress-bar-inner"
                          style={{
                            width: i < mediaIndex ? '100%' : i === mediaIndex ? `${progressWidths[i] || 0}%` : '0%'
                          }}
                        ></div>
                      </div>
                    ))}
                  </div>

                  {/* Profile info */}
                  <div className="profile">
                    <img src={profile.profile} alt={profile.name} />
                    <h4>{profile.name}</h4>
                  </div>

                  {/* Media */}
                  {isVideo ? (
                    <video
                      ref={videoRef}
                      src={currentMedia}
                      muted
                      playsInline
                    ></video>
                  ) : (
                    <img src={currentMedia} alt={profile.name} />
                  )}

                  {/* Play/Pause Button */}
                  <div 
                    className="story-play-btn" 
                    onClick={(e) => { e.stopPropagation(); togglePlayPause(); }}
                  >
                    {isPlaying ? <FaPause /> : <FaPlay />}
                  </div>
                </>
              )}
              
              {!isActive && (
                <>
                  <img src={currentMedia} alt={profile.name} />
                  <div className="profile">
                    <img src={profile.profile} alt={profile.name} />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      <div className="nav-btn right" onClick={(e) => { e.stopPropagation(); nextStory(); }}>
        ❯
      </div>
    </div>
  );
}