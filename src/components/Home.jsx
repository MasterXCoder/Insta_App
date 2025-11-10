import React, { useState, useEffect } from 'react';

import '../css/home.css';

const Home = ({ onNavigate }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedPosts = JSON.parse(sessionStorage.getItem('posts')) || [];
    setPosts(savedPosts);
  }, []);

  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', fontFamily: 'Arial, sans-serif', display: 'flex' }}>
      {/* Sidebar */}
      <div style={{ position: 'fixed', top: 0, left: 0, height: '100vh', width: '250px', backgroundColor: 'black', display: 'flex', flexDirection: 'column', padding: '20px', borderRight: '1px solid #333', zIndex: 1000 }}>
        <h1 style={{ fontSize: '25px', fontFamily: '"Dancing Script", cursive', padding: '12px', marginBottom: '24px', cursor: 'pointer' }}>Instagram</h1>
        
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[
            { icon: '🏠', label: 'Home' },
            { icon: '🔍', label: 'Search' },
            { icon: '🧭', label: 'Explore' },
            { icon: '🎬', label: 'Reels' },
            { icon: '✉️', label: 'Messages' },
            { icon: '❤️', label: 'Notifications' },
            { icon: '➕', label: 'Create' },
            { icon: '👤', label: 'Profile' }
          ].map((item, i) => (
            <div 
              key={i}
              style={{ color: 'white', fontSize: '16px', padding: '12px', display: 'flex', alignItems: 'center', gap: '12px', borderRadius: '8px', cursor: 'pointer', transition: 'background-color 0.2s' }} 
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#262626'} 
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <span>{item.icon}</span> <span>{item.label}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div style={{ marginLeft: '300px', width: '500px', padding: '40px 20px' }}>
        {/* Stories */}
        <div style={{ display: 'flex', gap: '15px', marginTop: '20px', marginBottom: '30px', overflowX: 'auto' }}>
          {['Nishchal', 'Lucky', 'Madhav', 'Ishpreet', 'Love', 'Mohit'].map((name, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', minWidth: '70px' }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '50%', 
                background: 'linear-gradient(45deg, #d62976, #fa1eef, #feda75)',
                padding: '3px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src={`https://i.pravatar.cc/60?img=${i+1}`} 
                  alt={name}
                  style={{ 
                    width: '54px', 
                    height: '54px', 
                    borderRadius: '50%',
                    border: '2px solid black'
                  }}
                />
              </div>
              <p style={{ fontSize: '12px', margin: '5px 0 0 0', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', width: '70px', textAlign: 'center' }}>{name}</p>
            </div>
          ))}
        </div>

        {/* Posts */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {[
            { user: 'warnerbrosindia', img: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500', likes: '1,317,839', caption: '#ContestAlert #TheConjuring: Last Rites Movie Contest goes live soon', comments: '26,687' },
            { user: 'Lucky Arora', img: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=500', likes: '101', caption: '✌️', comments: '2' }
          ].map((post, index) => (
            <div key={index} style={{ borderBottom: '1px solid #333', paddingBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <img 
                  src={`https://i.pravatar.cc/40?img=${index + 10}`} 
                  style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
                  alt="User"
                />
                <span style={{ fontWeight: 'bold' }}>{post.user}</span>
                <span style={{ marginLeft: 'auto', fontSize: '20px', cursor: 'pointer' }}>⋮</span>
              </div>
              
              <img 
                src={post.img} 
                style={{ width: '100%', borderRadius: '4px', marginBottom: '12px' }}
                alt="Post"
              />
              
              <div style={{ display: 'flex', gap: '15px', marginBottom: '8px' }}>
                <span 
                  onClick={() => handleLike(index)} 
                  style={{ fontSize: '24px', cursor: 'pointer', transition: 'transform 0.2s' }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  {likedPosts[index] ? '❤️' : '🤍'}
                </span>
                <span style={{ fontSize: '24px', cursor: 'pointer' }}>💬</span>
                <span style={{ fontSize: '24px', cursor: 'pointer' }}>📤</span>
                <span style={{ fontSize: '24px', cursor: 'pointer', marginLeft: 'auto' }}>🔖</span>
              </div>
              
              <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>{post.likes} likes</div>
              <div style={{ marginBottom: '8px' }}>
                <span style={{ fontWeight: 'bold' }}>{post.user}</span> {post.caption}
              </div>
              <div style={{ color: '#888', fontSize: '14px', marginBottom: '10px', cursor: 'pointer' }}>View all {post.comments} comments</div>
              <input 
                type="text" 
                placeholder="Add a comment..." 
                style={{ width: '100%', background: 'none', border: 'none', borderTop: '1px solid #333', color: 'white', padding: '10px 0', fontSize: '14px', outline: 'none' }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div style={{ position: 'fixed', right: '20px', top: '20px', width: '320px', padding: '15px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', cursor: 'pointer' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="https://i.pravatar.cc/50?img=1" style={{ width: '50px', height: '50px', borderRadius: '50%' }} alt="User" />
            <div>
              <div style={{ fontWeight: 'bold', fontSize: '14px' }}>Vansh Singh</div>
              <div style={{ fontSize: '12px', color: 'gray' }}>vansh_singh_787</div>
            </div>
            <a href="#">Follow</a>
          </div>
          <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#0095f6', cursor: 'pointer' }}>Switch</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          <h4 style={{ fontSize: '14px', fontWeight: 'bold', color: '#888', margin: 0 }}>Suggested for you</h4>
          <span style={{ fontSize: '12px', color: '#fff', cursor: 'pointer' }}>See All</span>
        </div>

        {['ld.gurveeer', 'naman1621', 'itsharman_03', 'tanush_520', 'anand_akash07'].map((user, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <img src={`https://i.pravatar.cc/45?img=${i+15}`} style={{ width: '45px', height: '45px', borderRadius: '50%' }} alt={user} />
              <div>
                <div style={{ fontSize: '13px', fontWeight: 'bold' }}>{user}</div>
                <div style={{ fontSize: '11px', color: 'gray' }}>Followed by others</div>
              </div>
            </div>
            <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#0095f6', cursor: 'pointer' }}>Follow</span>
          </div>
        ))}

        <footer style={{ marginTop: '30px', fontSize: '11px', color: 'gray', lineHeight: '1.6' }}>
          <p style={{ margin: 0 }}>About · Help · Press · API · Jobs · Privacy · Terms</p>
          <p style={{ margin: '5px 0 0 0' }}>© 2025 INSTAGRAM FROM META</p>
        </footer>
      </div>
    </div>


  );
};

export default Home;
