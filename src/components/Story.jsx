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

  const viewerContainerRef = useRef(null);
  const videoRef = useRef(null);
  const progressIntervalRef = useRef(null);
  const progressStartTimeRef = useRef(null);

  // Center active story
  useEffect(() => {
    if (viewerContainerRef.current) {
      const activeDiv = viewerContainerRef.current.querySelector(".storyViewer__card--active");
      if (activeDiv) {
        const offset = viewerContainerRef.current.clientWidth / 2 - (activeDiv.offsetLeft + activeDiv.clientWidth / 2);
        viewerContainerRef.current.style.transition = "transform 0.7s ease-in-out";
        viewerContainerRef.current.style.transform = `translateX(${offset}px)`;
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
    if (index === profileIndex) return "storyViewer__card--active";
    
    // Adjacent stories
    const prevIndex = (profileIndex - 1 + stories.length) % stories.length;
    const nextIndex = (profileIndex + 1) % stories.length;
    
    if (index === prevIndex) return "storyViewer__card--left";
    if (index === nextIndex) return "storyViewer__card--right";
    
    // All other stories based on their position relative to active
    if (index < profileIndex) return "storyViewer__card--farLeft";
    return "storyViewer__card--farRight";
  };

  return (
    <div className="storyViewer">
      <button className="storyViewer__navBtn storyViewer__navBtn--left" onClick={(e) => { e.stopPropagation(); prevStory(); }}>
        ❮
      </button>

      <div className="storyViewer__container" ref={viewerContainerRef} onClick={togglePlayPause}>
        {stories.map((profile, index) => {
          const storyClass = getStoryClass(index);
          const isActive = index === profileIndex;
          const currentMedia = isActive ? profile.media[mediaIndex] : profile.media[0];
          const isVideo = currentMedia.endsWith('.mp4');

          return (
            <div key={index} className={`storyViewer__card ${storyClass}`}>
              {isActive && (
                <>
                  {/* Progress bars */}
                  <div className="storyViewer__progressContainer">
                    {profile.media.map((_, i) => (
                      <div key={i} className="storyViewer__progressBar">
                        <div
                          className="storyViewer__progressBarInner"
                          style={{
                            width: i < mediaIndex ? '100%' : i === mediaIndex ? `${progressWidths[i] || 0}%` : '0%'
                          }}
                        ></div>
                      </div>
                    ))}
                  </div>

                  {/* Profile info */}
                  <div className="storyViewer__profile">
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
                      className="storyViewer__media"
                    ></video>
                  ) : (
                    <img src={currentMedia} alt={profile.name} className="storyViewer__media" />
                  )}

                  {/* Play/Pause Button */}
                  <div 
                    className="storyViewer__playBtn" 
                    onClick={(e) => { e.stopPropagation(); togglePlayPause(); }}
                  >
                    {isPlaying ? <FaPause /> : <FaPlay />}
                  </div>
                </>
              )}
              
              {!isActive && (
                <>
                  <img src={currentMedia} alt={profile.name} className="storyViewer__media" />
                  <div className="storyViewer__profile">
                    <img src={profile.profile} alt={profile.name} />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      <button className="storyViewer__navBtn storyViewer__navBtn--right" onClick={(e) => { e.stopPropagation(); nextStory(); }}>
        ❯
      </button>
    </div>
  );
}