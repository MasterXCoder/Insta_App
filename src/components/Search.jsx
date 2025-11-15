import React, { useState, useEffect } from 'react';

import '../css/search.css';

export default function Search({ isOpen, onClose }) {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showRecent, setShowRecent] = useState(true);

  // Dummy users
  const users = [
    { name: 'Ishpreet Singh', pic: '/pics/profile_2.jpg' },
    { name: 'Lucky Arora', pic: '/pics/profile_3.jpg' },
    { name: 'Madhav', pic: '/pics/profile_8.jpg' },
    { name: 'Lovepreet', pic: '/pics/profile_4.jpg' },
    { name: 'Nishchal', pic: '/pics/profile_5.jpg' },
    { name: 'Mohit', pic: '/pics/profile_6.jpg' },
    { name: 'Mohit Chaudhary', pic: '/pics/profile_7.jpg' },
    { name: 'Mikash', pic: '/pics/profile_9.jpg' },
    { name: 'Lavnish', pic: '/pics/profile_10.jpg' },
    { name: 'Kanav', pic: '/pics/profile_11.jpg' },
    { name: 'Rachit Singh', pic: 'https://randomuser.me/api/portraits/men/4.jpg' },
    { name: 'My Bathinda', pic: 'https://randomuser.me/api/portraits/women/5.jpg' }
  ];

  // Display recent searches on mount
  useEffect(() => {
    if (isOpen && !searchInput) {
      setShowRecent(true);
      setSearchResults(users.slice(0, 3));
    }
  }, [isOpen]);

  // Handle search input
  const handleSearchInput = (e) => {
    const query = e.target.value.trim().toLowerCase();
    setSearchInput(e.target.value);

    if (!query) {
      setShowRecent(true);
      setSearchResults(users.slice(0, 3));
      return;
    }

    setShowRecent(false);
    const filtered = users.filter(u => u.name.toLowerCase().includes(query));
    setSearchResults(filtered);
  };

  // Handle user click - redirect to profile
  const handleUserClick = (user) => {
    const url = `/profile?name=${encodeURIComponent(user.name)}&pic=${encodeURIComponent(user.pic)}`;
    window.location.href = url;
  };

  // Render user item
  const UserItem = ({ user }) => (
    <div className="user_item" onClick={() => handleUserClick(user)}>
      <img src={user.pic} alt={user.name} />
      <span>{user.name}</span>
    </div>
  );

  if (!isOpen) return null;

  return (
    <div id="search_container" style={{ display: 'flex' }}>
      <div id="search_top">
        <h2>Search</h2>
        <input
          type="text"
          id="search_input"
          placeholder="Search users..."
          value={searchInput}
          onChange={handleSearchInput}
        />
      </div>
      <div id="search_results">
        {showRecent && (
          <div id="recent_section" style={{ display: 'block' }}>
            <h3>Recent</h3>
            <div id="recent_list">
              {searchResults.map((user, i) => (
                <UserItem key={i} user={user} />
              ))}
            </div>
          </div>
        )}
        {!showRecent && (
          <>
            {searchResults.map((user, i) => (
              <UserItem key={i} user={user} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}