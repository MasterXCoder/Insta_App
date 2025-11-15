import React, { useState, useEffect, useRef } from "react";
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
  const [showPlayPause, setShowPlayPause] = useState(false);

  const viewerRef = useRef(null);
  const videoRef = useRef(null);
  const progressIntervalRef = useRef(null);
  const progressStartTimeRef = useRef(null);

  // Update story display positioning
  useEffect(() => {
    updateStoryDisplay();
  }, [profileIndex, mediaIndex]);

  // Handle progress animation and auto-play
  useEffect(() => {
    clearInterval(progressIntervalRef.current);

    if (!isPlaying) {
      if (videoRef.current) videoRef.current.pause();
      return;
    }

    const currentProfile = stories[profileIndex];
    const currentMedia = currentProfile.media[mediaIndex];
    const isVideo = currentMedia.endsWith('.mp4');

    let duration = 3000; // default for images

    if (isVideo && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
      
      // Wait for video metadata to load
      const handleLoadedMetadata = () => {
        duration = videoRef.current.duration * 1000 || 3000;
        startProgress(duration);
      };

      if (videoRef.current.readyState >= 1) {
        duration = videoRef.current.duration * 1000 || 3000;
        startProgress(duration);
      } else {
        videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
        return () => videoRef.current?.removeEventListener('loadedmetadata', handleLoadedMetadata);
      }
    } else {
      startProgress(duration);
    }

    return () => clearInterval(progressIntervalRef.current);
  }, [isPlaying, profileIndex, mediaIndex]);

  const startProgress = (duration) => {
    progressStartTimeRef.current = Date.now();
    const progressBar = document.getElementById(`progress-${mediaIndex}`);

    progressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - progressStartTimeRef.current;
      const percent = Math.min((elapsed / duration) * 100, 100);
      
      if (progressBar) {
        progressBar.style.width = percent + "%";
      }

      if (percent >= 100) {
        clearInterval(progressIntervalRef.current);
        nextStory();
      }
    }, 50);
  };

  const updateStoryDisplay = () => {
    if (viewerRef.current) {
      const activeDiv = viewerRef.current.querySelector(".st1.active");
      if (activeDiv) {
        const offset = viewerRef.current.clientWidth / 2 - (activeDiv.offsetLeft + activeDiv.clientWidth / 2);
        viewerRef.current.style.transition = "transform 0.7s ease-in-out";
        viewerRef.current.style.transform = `translateX(${offset}px)`;
      }
    }
  };

  const nextStory = () => {
    const profile = stories[profileIndex];
    const nextMediaIndex = mediaIndex + 1;

    if (nextMediaIndex >= profile.media.length) {
      setMediaIndex(0);
      setProfileIndex((profileIndex + 1) % stories.length);
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
    } else {
      setMediaIndex(prevMediaIndex);
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    setShowPlayPause(true);
    setTimeout(() => setShowPlayPause(false), 800);
  };

  const getStoryClass = (index) => {
    if (index === profileIndex) return "active";
    if (index === (profileIndex - 1 + stories.length) % stories.length) return "left";
    if (index === (profileIndex + 1) % stories.length) return "right";
    if (index < profileIndex) return "far-left";
    return "far-right";
  };

  return (
    <div id="storyContainer">
      <div className="nav-btn left" id="prevBtn" onClick={(e) => { e.stopPropagation(); prevStory(); }}>
        ❮
      </div>

      <div id="storyViewer" ref={viewerRef} onClick={togglePlayPause}>
        {stories.map((profile, index) => {
          const storyClass = getStoryClass(index);
          const isActive = index === profileIndex;
          const currentMedia = isActive ? profile.media[mediaIndex] : profile.media[0];
          const isVideo = currentMedia.endsWith('.mp4');

          return (
            <div key={index} className={`st1 ${storyClass}`} style={{ display: 'flex' }}>
              {isActive && (
                <>
                  <div className="progress-container">
                    {profile.media.map((_, i) => (
                      <div key={i} className="progress-bar">
                        <div
                          className="progress-bar-inner"
                          id={`progress-${i}`}
                          style={{
                            width: i < mediaIndex ? '100%' : i === mediaIndex ? '0%' : '0%'
                          }}
                        ></div>
                      </div>
                    ))}
                  </div>
                  <div className="profile">
                    <img src={profile.profile} alt={profile.name} />
                    <h4>{profile.name}</h4>
                  </div>
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

      <div className="nav-btn right" id="nextBtn" onClick={(e) => { e.stopPropagation(); nextStory(); }}>
        ❯
      </div>

      <div id="playPauseIcon" className={showPlayPause ? 'show' : ''}>
        {isPlaying ? '⏸️' : '▶️'}
      </div>
    </div>
  );
}