// StoryViewer.jsx
import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import "./story.css"; // make sure path is correct for your project

const storiesData = [
  { name: "Madhav", profile: "../pics/profile_8.jpg", media: ["../pics/pf_3_2.png", "../video/sample_1.mp4", "../pics/post_2.png"] },
  { name: "Ishpreet Singh", profile: "../pics/profile_2.jpg", media: ["../pics/post_3.png","../video/sample_5.mp4", "../video/sample_3.mp4", "../video/sample_7.mp4"] },
  { name: "Lucky Arora", profile: "../pics/profile_3.jpg", media: ["../pics/lucky_1.png", "../pics/post_3.png"] },
  { name: "Lovepreet", profile: "../pics/profile_4.jpg", media: ["../pics/post_1.png", "../video/sample_2.mp4"] },
  { name: "Nishchal", profile: "../pics/profile_5.jpg", media: ["../video/sample_3.mp4", "../pics/post_4.png", "../video/sample_8.mp4"] },
  { name: "Mohit", profile: "../pics/profile_6.jpg", media: ["../pics/post_3.png", "../video/sample_10.mp4", "../pics/post_5.png"] },
  { name: "Mikash", profile: "../pics/profile_9.jpg", media: ["../pics/post_1.png", "../pics/post_6.png"] },
  { name: "Lavnish", profile: "../pics/profile_10.jpg", media: ["../pics/post_2.png", "../video/sample_4.mp4", "../pics/post_7.png"] }
];

const IMAGE_DURATION = 3000; // ms for images

export default function StoryViewer() {
  const [profileIndex, setProfileIndex] = useState(0);
  const [mediaIndex, setMediaIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showPlayIcon, setShowPlayIcon] = useState(false);

  const viewerRef = useRef(null);
  const storyRefs = useRef([]); // array of refs to story DOM nodes
  const rafRef = useRef(null);
  const startTimeRef = useRef(0);
  const durationRef = useRef(IMAGE_DURATION);
  const progressPercRef = useRef(0);
  const timeoutHideIcon = useRef(null);

  // helper to clear animation
  const cancelProgress = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  // compute/display centering transform after render
  useLayoutEffect(() => {
    centerActiveStory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileIndex, mediaIndex, storyRefs.current.length, isPlaying]);

  function centerActiveStory() {
    const viewer = viewerRef.current;
    const activeEl = storyRefs.current[profileIndex];
    if (!viewer || !activeEl) return;
    const viewerRect = viewer.getBoundingClientRect();
    const activeRect = activeEl.getBoundingClientRect();

    // offset in px to translate the viewer so the active element centers
    const offset = viewerRect.width / 2 - (activeRect.left - viewerRect.left) - activeRect.width / 2;
    viewer.style.transition = "transform 0.7s ease-in-out";
    viewer.style.transform = `translateX(${offset}px)`;
  }

  // show play/pause icon briefly
  const flashPlayPause = () => {
    setShowPlayIcon(true);
    if (timeoutHideIcon.current) clearTimeout(timeoutHideIcon.current);
    timeoutHideIcon.current = setTimeout(() => setShowPlayIcon(false), 700);
  };

  // handle click on background/viewer to toggle play/pause
  const handleViewerClick = (e) => {
    // don't toggle when clicking controls (nav buttons) — those stopPropagation themselves
    if (e.target.closest("#prevBtn") || e.target.closest("#nextBtn")) return;
    setIsPlaying(prev => {
      const next = !prev;
      flashPlayPause();
      return next;
    });
  };

  // move next (advance to next media/profile)
  const nextStory = () => {
    const profile = storiesData[profileIndex];
    let newProfileIndex = profileIndex;
    let newMediaIndex = mediaIndex + 1;
    if (newMediaIndex >= profile.media.length) {
      newMediaIndex = 0;
      newProfileIndex = (profileIndex + 1) % storiesData.length;
    }
    setProfileIndex(newProfileIndex);
    setMediaIndex(newMediaIndex);
  };

  const prevStory = () => {
    const profile = storiesData[profileIndex];
    let newProfileIndex = profileIndex;
    let newMediaIndex = mediaIndex - 1;
    if (newMediaIndex < 0) {
      newProfileIndex = (profileIndex - 1 + storiesData.length) % storiesData.length;
      newMediaIndex = storiesData[newProfileIndex].media.length - 1;
    }
    setProfileIndex(newProfileIndex);
    setMediaIndex(newMediaIndex);
  };

  // progress animation loop
  const startProgress = () => {
    cancelProgress();
    startTimeRef.current = performance.now();
    progressPercRef.current = 0;

    const step = (ts) => {
      if (!isPlaying) {
        // if paused, keep scheduling but don't advance start time (so we can resume)
        startTimeRef.current = performance.now() - (progressPercRef.current / 100) * durationRef.current;
        rafRef.current = requestAnimationFrame(step);
        return;
      }

      const elapsed = ts - startTimeRef.current;
      const percent = Math.min((elapsed / durationRef.current) * 100, 100);
      progressPercRef.current = percent;

      // update DOM for the currently-active progress bar
      const activeStoryNode = storyRefs.current[profileIndex];
      if (activeStoryNode) {
        const inner = activeStoryNode.querySelector(`#progress-${mediaIndex}`);
        if (inner) inner.style.width = `${percent}%`;
      }

      if (percent >= 100) {
        // finished this media
        cancelProgress();
        // small delay to allow progress bar to visually reach 100%
        setTimeout(() => {
          nextStory();
        }, 120);
        return;
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
  };

  // set duration depending on media type and start playing video if needed
  useEffect(() => {
    cancelProgress();

    const profile = storiesData[profileIndex];
    const currentSrc = profile.media[mediaIndex];

    // reset all progress bars for this story: set previous ones to 100, later ones to 0
    const storyNode = storyRefs.current[profileIndex];
    if (storyNode) {
      profile.media.forEach((_, i) => {
        const inner = storyNode.querySelector(`#progress-${i}`);
        if (inner) inner.style.width = i < mediaIndex ? "100%" : "0%";
      });
    }

    if (currentSrc && currentSrc.toLowerCase().endsWith(".mp4")) {
      // if video, wait for metadata to get duration
      const tempVideo = document.createElement("video");
      tempVideo.preload = "metadata";
      tempVideo.src = currentSrc;
      const onLoaded = () => {
        const dur = (tempVideo.duration && Number.isFinite(tempVideo.duration) && tempVideo.duration > 0) ? tempVideo.duration * 1000 : IMAGE_DURATION;
        durationRef.current = dur;
        // try to sync actual video element inside the story DOM
        const storyNode = storyRefs.current[profileIndex];
        if (storyNode) {
          const v = storyNode.querySelector("video");
          if (v) {
            v.currentTime = 0;
            if (isPlaying) {
              v.play().catch(() => {});
            } else {
              v.pause();
            }
          }
        }
        startProgress();
        tempVideo.removeEventListener("loadedmetadata", onLoaded);
      };
      tempVideo.addEventListener("loadedmetadata", onLoaded);
      // safety: if metadata doesn't load use fallback
      const timer = setTimeout(() => {
        durationRef.current = IMAGE_DURATION;
        startProgress();
        tempVideo.removeEventListener("loadedmetadata", onLoaded);
      }, 1500);
      return () => {
        clearTimeout(timer);
        tempVideo.removeEventListener("loadedmetadata", onLoaded);
        cancelProgress();
      };
    } else {
      // image: fixed duration
      durationRef.current = IMAGE_DURATION;
      startProgress();
      return () => {
        cancelProgress();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileIndex, mediaIndex, isPlaying]);

  // cleanup on unmount
  useEffect(() => {
    return () => {
      cancelProgress();
      if (timeoutHideIcon.current) clearTimeout(timeoutHideIcon.current);
    };
  }, []);

  // clicking next/prev buttons should stop propagation to parent click handler
  const onNextClick = (e) => {
    e.stopPropagation();
    nextStory();
    flashPlayPause();
  };
  const onPrevClick = (e) => {
    e.stopPropagation();
    prevStory();
    flashPlayPause();
  };

  // render progress bars for a profile/media
  const renderProgressBars = (profile) => (
    <div className="progress-container">
      {profile.media.map((_, i) => (
        <div className="progress-bar" key={i}>
          <div id={`progress-${i}`} className="progress-bar-inner" style={{ width: i < mediaIndex ? "100%" : "0%" }} />
        </div>
      ))}
    </div>
  );

  return (
    <div id="storyContainer" onClick={handleViewerClick} style={{ width: "100%", height: "100%" }}>
      <button id="prevBtn" onClick={onPrevClick} aria-label="Previous story">❮</button>

      <div id="storyViewer" ref={viewerRef}>
        {storiesData.map((profile, idx) => {
          // assign role class
          let cls = "story";
          if (idx === profileIndex) cls += " active";
          else if (idx === (profileIndex - 1 + storiesData.length) % storiesData.length) cls += " left";
          else if (idx === (profileIndex + 1) % storiesData.length) cls += " right";
          else if (idx < profileIndex) cls += " far-left";
          else cls += " far-right";

          return (
            <div
              key={idx}
              className={cls}
              ref={(el) => (storyRefs.current[idx] = el)}
            >
              {idx === profileIndex && renderProgressBars(profile)}
              <div className="profile" style={{ display: "flex", alignItems: "center" }}>
                <img src={profile.profile} alt={profile.name} />
                <h4 style={{ marginLeft: 8 }}>{profile.name}</h4>
              </div>

              {/* show current media for active; for others show first media as preview */}
              {(() => {
                const src = idx === profileIndex ? profile.media[mediaIndex] : profile.media[0];
                if (src && src.toLowerCase().endsWith(".mp4")) {
                  return <video src={src} muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }} />;
                }
                return <img src={src} alt={profile.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />;
              })()}
            </div>
          );
        })}
      </div>

      <button id="nextBtn" onClick={onNextClick} aria-label="Next story">❯</button>

      <div id="playPauseIcon" className={showPlayIcon ? "show" : ""}>
        {isPlaying ? "⏸️" : "▶️"}
      </div>
    </div>
  );
}
