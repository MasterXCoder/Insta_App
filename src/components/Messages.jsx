import React, { useState } from "react";
import "../css/messages.css";
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";

const Messages = () => {
  const [activeChat, setActiveChat] = useState(null);

  const messagesList = [
    { id: 1, name: "Ishpreet Singh", img: "/pics/profile_2.jpg", msg: "You sent an attachment · 28m" },
    { id: 2, name: "Mohit Chaudhary", img: "/pics/profile_7.jpg", msg: "You sent an attachment · 48m" },
    { id: 3, name: "Mohit", img: "/pics/profile_6.jpg", msg: "You sent an attachment · 1h" },
    { id: 4, name: "Lucky Arora", img: "/pics/profile_3.jpg", msg: "You sent an attachment · 2h" },
    { id: 5, name: "Madhav", img: "/pics/profile_8.jpg", msg: "Liked a message · 3h" },
    { id: 6, name: "Lovepreet", img: "/pics/profile_4.jpg", msg: "ok · 8h" },
    { id: 7, name: "Nishchal", img: "/pics/profile_5.jpg", msg: "done · 8h" },
  ];

  return (
    <div id="main_page">
      {/* Left Fixed Sidebar */}
      <Sidebar />

      {/* Messages Section */}
      <div className="messages_main">
        {/* Left Message List */}
        <div className="sidebar">
          <header className="sidebar-header">
            <div className="search-container">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <input type="text" className="search-input" placeholder="Search" />
            </div>
          </header>

          {/* Notes */}
          <section className="notes-section">
            {[
              { img: "/pics/profile_1.jpg", name: "Your note", bubble: "Note..." },
              { img: "/pics/profile_5.jpg", name: "Nishchal", bubble: "Rao Sahab" },
              { img: "/pics/profile_9.jpg", name: "Mani", bubble: "Radhe radhe" },
            ].map((note, idx) => (
              <div key={idx} className="notes">
                <span className="note-bubble">{note.bubble}</span>
                <img src={note.img} alt={note.name} className="note-img" />
                <span className="note-username">{note.name}</span>
              </div>
            ))}
          </section>

          {/* Messages */}
          <div className="messages-container">
            <header className="messages-list-header">
              <h2 className="messages_title">Messages</h2>
              <a href="#" className="requests-link">Requests</a>
            </header>

            <div className="messages-list">
              {messagesList.map((msg) => (
                <div
                  key={msg.id}
                  className={`message-person ${activeChat === msg.id ? "active-chat" : ""}`}
                  onClick={() => setActiveChat(msg.id)}
                >
                  <img src={msg.img} alt={msg.name} className="person-image" />
                  <div className="person-details">
                    <span className="person-username">{msg.name}</span>
                    <span className="person-preview">{msg.msg}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Chat Section */}
        <ChatArea activeChat={activeChat} />
      </div>
    </div>
  );
};

export default Messages;
