import React from "react";

const ChatArea = ({ activeChat }) => {
  if (!activeChat) {
    return (
      <main className="chat-area-main">
        <div className="empty-chat">
          <div className="empty-chat-icon">
            <i className="fab fa-facebook-messenger"></i>
          </div>
          <h1 className="empty-chat-title">Your messages</h1>
          <p className="empty-chat-subtitle">Send a message to start a chat.</p>
          <button className="send-message-button">Send message</button>
        </div>
      </main>
    );
  }

  return (
    <main className="chat-area-main">
      <div className="right-main-chat">
        <div className="chat-heading">
          <div className="chat-heading-userinfo">
            <img src="/pics/demo_2.jpg" alt="chat user" />
            <span className="chat_user_name">Mohit</span>
          </div>
          <div className="chat-heading-icons">
            <i className="fa-solid fa-phone size-6"></i>
            <i className="fa-solid fa-video size-6"></i>
            <i className="fa-solid fa-info-circle size-6"></i>
          </div>
        </div>

        <div className="chat-area">
          <div className="chat-area-reels-right">
            <div className="short-right">
              <div className="short-icons">
                <i className="fa-solid fa-ellipsis-vertical size-6"></i>
                <i className="fa-solid fa-reply size-6"></i>
                <i className="fa-regular fa-face-smile size-6"></i>
              </div>

              <div className="video-container">
                <div className="video-header">
                  <img src="/pics/profile_2.jpg" alt="Profile" className="profile-pic" />
                  <span className="profile-name">_sahilbeniwal</span>
                </div>
                <video src="/video/sample_6.mp4" autoPlay loop muted></video>
                <div className="reels-icon">
                  <i className="fa-solid fa-clapperboard"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div className="chat-area-message">
            <i className="fa-regular fa-face-smile size-6"></i>
            <input type="text" placeholder="Message..." />
            <i className="fa-solid fa-microphone size-6"></i>
            <i className="fa-solid fa-camera size-6"></i>
            <i className="fa-solid fa-image size-6"></i>
            <i className="fa-solid fa-paper-plane size-6"></i>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ChatArea;
