import React, { useState } from 'react';
import '../css/Notification.css';

const Notification = ({ isOpen, onClose }) => {
  const [notifications] = useState([
    {
      id: 1,
      type: 'following',
      username: 'svkhbx',
      avatar: '/pics/profile_3.jpg',
      date: 'Oct 15',
      action: 'started following you'
    },
    {
      id: 2,
      type: 'like',
      username: 'navreetk_06',
      username2: 'iishu._16',
      avatar: '/pics/profile_4.jpg',
      date: 'Oct 09',
      action: 'and 1 other liked your story',
      thumbnail: '/pics/thumb_2.jpg'
    },
    {
      id: 3,
      type: 'request',
      username: 'gurvinder_bhatia3',
      avatar: '/pics/profile_5.jpg',
      date: 'Sep 29',
      action: 'requested to follow you',
      thumbnail: '/pics/thumb_3.jpg'
    },
    {
      id: 4,
      type: 'following',
      username: 'vansh_singh_02',
      avatar: '/pics/profile_6.jpg',
      date: 'Oct 12',
      action: 'started following you'
    },
    {
      id: 5,
      type: 'like',
      username: 'karan_086',
      username2: 'arman@165',
      avatar: '/pics/profile_2.jpg',
      date: 'Oct 08',
      action: 'and 2 others liked your post',
      thumbnail: '/pics/thumb_1.jpg'
    },
    {
      id: 6,
      type: 'request',
      username: 'ritu_goyal_art',
      avatar: '/pics/profile_7.jpg',
      date: 'Sep 25',
      action: 'requested to follow you',
      thumbnail: '/pics/thumb_4.jpg'
    }
  ]);

  const handleConfirm = (id) => {
    console.log('Confirmed:', id);
  };

  const handleDelete = (id) => {
    console.log('Deleted:', id);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="notification-overlay" onClick={onClose}></div>
      <div className={`notification-panel ${isOpen ? 'open' : ''}`}>
        <div className="notification-header">
          <h2>Notifications</h2>
        </div>

        {/* Follow Requests Section */}
        <div className="notification-request-banner">
          <img src="/pics/profile_1.jpg" alt="profile" className="request-avatar" />
          <div className="request-info">
            <p className="request-title"><strong>Follow requests</strong></p>
            <p className="request-subtitle">hiten_256 + 5 others</p>
          </div>
          <div className="notification-indicator"></div>
          <svg 
            className="chevron-icon"
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="2" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>

        {/* This Week Section */}
        <div className="notification-section">
          <h3>This week</h3>
          <div className="notification-meta-info">
            <img src="/pics/profile_1.jpg" alt="profile" />
            <p>Learn how Meta will use your info in new ways to personalize your experiences.</p>
          </div>
        </div>

        {/* This Month Section */}
        <div className="notification-section">
          <h3>This month</h3>
          <div className="notification-list">
            {notifications.map((notif) => (
              <div key={notif.id} className={`notification-item ${notif.type}`}>
                <img src={notif.avatar} alt={notif.username} className="notif-avatar" />
                
                <div className="notif-content">
                  <p>
                    {notif.type === 'like' ? (
                      <>
                        <strong>{notif.username}, {notif.username2}</strong> {notif.action}
                      </>
                    ) : (
                      <>
                        <strong>{notif.username}</strong> {notif.action}
                      </>
                    )}
                  </p>
                  <span className="notif-date">{notif.date}</span>
                </div>

                {notif.type === 'following' && (
                  <button className="btn-following">Following</button>
                )}

                {notif.type === 'request' && (
                  <div className="notif-actions">
                    <button 
                      className="btn-confirm"
                      onClick={() => handleConfirm(notif.id)}
                    >
                      Confirm
                    </button>
                    <button 
                      className="btn-delete"
                      onClick={() => handleDelete(notif.id)}
                    >
                      Delete
                    </button>
                  </div>
                )}

                {notif.thumbnail && (
                  <img src={notif.thumbnail} alt="thumbnail" className="notif-thumbnail" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;