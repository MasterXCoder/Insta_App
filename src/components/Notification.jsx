import React from "react";
import "../css/notification.css";

export default function Notification() {
  const notifications = [
    {
      type: "follow",
      username: "svkhbx",
      message: "started following you.",
      date: "Oct 15",
      avatar: "/pics/profile_3.jpg",
      actions: <button className="following-btn">Following</button>,
    },
    {
      type: "like",
      username: "navreetk_06, iishu._16",
      message: "and 1 other liked your story.",
      date: "Oct 09",
      avatar: "/pics/profile_4.jpg",
      thumb: "/pics/thumb_2.jpg",
    },
    {
      type: "request",
      username: "gurvinder_bhatia3",
      message: "requested to follow you.",
      date: "Sep 29",
      avatar: "/pics/profile_5.jpg",
      thumb: "/pics/thumb_3.jpg",
      actions: (
        <>
          <button className="confirm-btn">Confirm</button>
          <button className="delete-btn">Delete</button>
        </>
      ),
    },
  ];

  return (
    <div className="main">
      <h1>Notifications</h1>

      {/* Follow Requests Section */}
      <div className="request-section">
        <img src="/pics/profile_1.jpg" alt="profile" />
        <div className="request-section-follow">
          <p>
            <b>Follow requests</b>
          </p>
          <p className="follow-requests">hiten_256 + 5 others</p>
        </div>
        <div className="blue-dot"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>

      {/* This Week Section */}
      <h2>This week</h2>
      <div className="latest-news">
        <img src="/pics/profile_1.jpg" alt="profile" />
        <p>
          Learn how Meta will use your info in new ways to personalize your
          experiences.
        </p>
      </div>

      {/* This Month Section */}
      <h2>This month</h2>
      <div className="notification-list">
        {notifications.map((notif, index) => (
          <div
            key={index}
            className={
              notif.type === "follow"
                ? "notification-following"
                : notif.type === "like"
                ? "notification-item"
                : "notification-request"
            }
          >
            <img
              className="notif-avatar"
              src={notif.avatar}
              alt={`${notif.username} avatar`}
            />
            <div className="notif-content">
              <p>
                <strong>{notif.username}</strong> {notif.message}
              </p>
              <span className="notif-date">{notif.date}</span>
            </div>
            <div className="notif-actions">{notif.actions}</div>
            {notif.thumb && (
              <img
                className="notif-thumb"
                src={notif.thumb}
                alt="thumbnail"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
