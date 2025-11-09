import React, { useState, useEffect } from 'react';

import '../css/home.css';

const Home = ({ onNavigate }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedPosts = JSON.parse(sessionStorage.getItem('posts')) || [];
    setPosts(savedPosts);
  }, []);

  return (
    <div>
      <div id="main_page">
        <div id="main_nav">
          <header>
            <a href="#" className="logo">Instagram</a>
            <nav>
              <a href="#" id="insta-icon"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fas fa-home"></i><span id="dis">Home</span></a>
              <a href="#search"><i className="fas fa-search"></i><span id="dis">Search</span></a>
              <a href="#"><i className="fas fa-compass"></i><span id="dis">Explore</span></a>
              <a href="#"><i className="fas fa-video"></i><span id="dis">Reels</span></a>
              <a href="#"><i className="fab fa-facebook-messenger"></i><span id="dis">Messages</span></a>
              <a href="#notifications"><i className="fas fa-heart"></i><span id="dis">Notifications</span></a>
              <a href="#create"><i className="fas fa-plus-square"></i><span id="dis">Create</span></a>
              <a href="#">
                <img src="/pics/profile_1.jpg" alt="Profile" className="icon" style={{ borderRadius: '50%' }} />
                <span id="dis">Profile</span>
              </a>
              <br /><br /><br /><br /><br />
              <a href="#more" className="main_more"><i className="fas fa-bars"></i><span id="dis">More</span></a>
            </nav>
          </header>
        </div>

        {/* Search Container */}
        {/* <div id="search_container">
          <div id="search_top">
            <h2>Search</h2>
            <input type="text" id="search_input" placeholder="Search users..." />
          </div>
          <div id="search_results">
            <div id="recent_section">
              <h3>Recent</h3>
              <div id="recent_list"></div>
            </div>
          </div>
        </div> */}

        {/* Notifications */}
        {/* <div className="notifications">
          <div className="main">
            <h1>Notifications</h1>
            <div className="request-section">
              <img src="/pics/profile_1.jpg" alt="profile" />
              <div className="request-section-follow">
                <p><b>Follow requests</b></p>
                <p className="follow-requests">hiten_256 + 5 others</p>
              </div>
              <div className="blue-dot"></div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </div>
            <h2>This week</h2>
            <div className="latest-news">
              <img src="/pics/profile_1.jpg" alt="profile" />
              <p>Learn how Meta will use your info in new ways to personalize your experiences.</p>
            </div>
            <h2>This month</h2>

            <div className="notification-list">
              <div className="notification-following">
                <img className="notif-avatar" src="/pics/profile_3.jpg" alt="avatar" />
                <div className="notif-content">
                  <p><strong>svkhbx</strong> started following you.</p>
                  <span className="notif-date">Oct 15</span>
                </div>
                <div className="notif-actions">
                  <button className="following-btn">Following</button>
                </div>
              </div>

              <div className="notification-item">
                <img className="notif-avatar" src="/pics/profile_4.jpg" alt="avatar" />
                <div className="notif-content">
                  <p><strong>ishpreet_06, nishchal._16</strong> and 1 other liked your story.</p>
                  <span className="notif-date">Oct 09</span>
                </div>
                <div className="notif-actions"></div>
                <img className="notif-thumb" src="/pics/thumb_2.jpg" alt="thumb" />
              </div>

              <div className="notification-request">
                <img className="notif-avatar" src="/pics/profile_5.jpg" alt="avatar" />
                <div className="notif-content">
                  <p><strong>gurvinder_bhatia3</strong> requested to follow you.</p>
                  <span className="notif-date">Sep 29</span>
                </div>
                <div className="notif-actions">
                  <button className="confirm-btn">Confirm</button>
                  <button className="delete-btn">Delete</button>
                </div>
                <img className="notif-thumb" src="/pics/thumb_3.jpg" alt="thumb" />
              </div>
            </div>
          </div>
        </div> */}

        {/* HOME PAGE */}
        <div id="home">
          {/* STORY */}
          <div id="home_status">
            <a href="#" className="story">
              <img src="/pics/profile_5.jpg" alt="Nishchal" />
              <p className="username">Nishchal</p>
            </a>
            <a href="#" className="story">
              <img src="/pics/profile_3.jpg" alt="Lucky Arora" />
              <p className="username">Lucky Arora</p>
            </a>
            <a href="#" className="story">
              <img src="/pics/profile_8.jpg" alt="Madhav" />
              <p className="username">Madhav</p>
            </a>
            <a href="#" className="story">
              <img src="/pics/profile_2.jpg" alt="Ishpreet" />
              <p className="username">Ishpreet Si...</p>
            </a>
            <a href="#" className="story">
              <img src="/pics/profile_4.jpg" alt="Lovepreet" />
              <p className="username">Lovepreet</p>
            </a>
            <a href="#" className="story">
              <img src="/pics/profile_6.jpg" alt="Mohit" />
              <p className="username">Mohit</p>
            </a>
          </div>

          {/* POSTS */}
          <div id="post-no">
            {/* Post 1 */}
            <div className="post">
              <div className="home_posts">
                <div id="home_posts_img">
                  <img src="/pics/warnerbrosindia.jpg" alt="warnerbros" />
                </div>
                <a href="#" id="pf_3"><p>warnerbrosindia</p></a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </div>

              <div id="posts_image">
                <img src="/pics/post_3.png" alt="post-1" />
              </div>

              <div className="post-footer">
                <div className="post-footer-rxn">
                  <input type="checkbox" id="like1" className="like-checkbox" />
                  <label htmlFor="like1">
                    <svg className="like-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/>
                    </svg>
                  </label>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/>
                  </svg>
                  <svg className="fa-solid fa-share" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/>
                    <path d="m21.854 2.147-10.94 10.939"/>
                  </svg>
                  <svg className="rxn-save" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
                  </svg>
                </div>
              </div>

              <div className="likes">1,317,839 likes</div>
              <div className="caption"><span className="username">#ContestAlert #TheConjuring: Last Rites Movie Contest goes live soon</span></div>
              <div className="comments-link">View all 26,687 comments</div>
              <div className="add-comment"><input type="text" placeholder="Add a comment..." /></div>
            </div>

            {/* Post 2 */}
            <div className="post">
              <div className="home_posts">
                <div id="home_posts_img">
                  <img src="/pics/profile_3.jpg" alt="Lucky Arora" />
                </div>
                <a href="#" id="pf_3"><p>Lucky Arora</p></a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </div>

              <div id="posts_image">
                <img src="/pics/lucky_2.png" alt="post-2" />
              </div>

              <div className="post-footer">
                <div className="post-footer-rxn">
                  <input type="checkbox" id="like2" className="like-checkbox" />
                  <label htmlFor="like2">
                    <svg className="like-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/>
                    </svg>
                  </label>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/>
                  </svg>
                  <svg className="fa-solid fa-share" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/>
                    <path d="m21.854 2.147-10.94 10.939"/>
                  </svg>
                  <svg className="rxn-save" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
                  </svg>
                </div>
              </div>

              <div className="likes">101 likes</div>
              <div className="caption"><span className="username">Lucky Arora</span> ✌️</div>
              <div className="comments-link">View all 2 comments</div>
              <div className="add-comment"><input type="text" placeholder="Add a comment..." /></div>
            </div>

            {/* Post 3 */}
            <div className="post">
              <div className="home_posts">
                <div id="home_posts_img">
                  <img src="/pics/post_2.png" alt="rohitsharma" />
                </div>
                <p>rohitsharma45</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </div>

              <div id="posts_image">
                <img src="/pics/post_2.png" alt="post-3" />
              </div>

              <div className="post-footer">
                <div className="post-footer-rxn">
                  <input type="checkbox" id="like3" className="like-checkbox" />
                  <label htmlFor="like3">
                    <svg className="like-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/>
                    </svg>
                  </label>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/>
                  </svg>
                  <svg className="fa-solid fa-share" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/>
                    <path d="m21.854 2.147-10.94 10.939"/>
                  </svg>
                  <svg className="rxn-save" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
                  </svg>
                </div>
              </div>

              <div className="likes">1,317,839 likes</div>
              <div className="caption"><span className="username">rohitsharma45</span> 🇮🇳👑</div>
              <div className="comments-link">View all 26,687 comments</div>
              <div className="add-comment"><input type="text" placeholder="Add a comment..." /></div>
            </div>
          </div>
        </div>

        {/* Suggested for You Section */}
        <div id="suggested">
          <div className="current-user">
            <img src="/pics/profile_1.jpg" alt="Profile" className="profile-pic" />
            <div className="user-info">
              <strong>Vansh Singh</strong>
              <p>vansh_singh_787</p>
            </div>
            <a href="#">Switch</a>
          </div>

          <h4>Suggested for you <a href="#" className="see-all">See All</a></h4>

          <div className="suggestion profile-link" data-name="ld.gurveeer" data-pic="/pics/demo_1.jpg">
            <img src="/pics/demo_1.jpg" alt="ld.gurveeer" className="profile-pic" />
            <div>
              <strong>ld.gurveeer</strong>
              <p>Followed by priyanshi.dhall_</p>
            </div>
            <a href="#">Follow</a>
          </div>

          <div className="suggestion profile-link" data-name="naman1621" data-pic="/pics/demo_2.jpg">
            <img src="/pics/demo_2.jpg" alt="naman1621" className="profile-pic" />
            <div>
              <strong>naman1621</strong>
              <p>Followed by _harshitjangta_ + 2</p>
            </div>
            <a href="#">Follow</a>
          </div>

          <div className="suggestion profile-link" data-name="itsharman_03" data-pic="/pics/demo_3.jpg">
            <img src="/pics/demo_3.jpg" alt="itsharman_03" className="profile-pic" />
            <div>
              <strong>itsharman_03</strong>
              <p>Followed by _harshitjangta_ + 2</p>
            </div>
            <a href="#">Follow</a>
          </div>

          <div className="suggestion profile-link" data-name="tanush_520" data-pic="/pics/demo_4.jpg">
            <img src="/pics/demo_4.jpg" alt="tanush_520" className="profile-pic" />
            <div>
              <strong>tanush_520</strong>
              <p>Followed by ananyaguptaa16 + ...</p>
            </div>
            <a href="#">Follow</a>
          </div>

          <div className="suggestion profile-link" data-name="anand_akash07" data-pic="/pics/demo_5.jpg">
            <img src="/pics/demo_5.jpg" alt="anand_akash07" className="profile-pic" />
            <div>
              <strong>anand_akash07</strong>
              <p>Followed by chitkarafresherss_2</p>
            </div>
            <a href="#">Follow</a>
          </div>

          <footer>
            <p>About · Help · Press · API · Jobs · Privacy · Terms · Locations · Language · Meta Verified</p>
            <p>© 2025 INSTAGRAM FROM META</p>
          </footer>
        </div>

        {/* Floating Message Bar */}
        <div className="popup-bar" onClick={() => {}}>
          <div className="icon">
            <i className="fab fa-facebook-messenger"></i>
          </div>
          <span className="label">Messages</span>
          <div className="avatars">
            <img src="/pics/profile_2.jpg" alt="" />
            <img src="/pics/profile_5.jpg" alt="" />
            <img src="/pics/profile_3.jpg" alt="" />
            <div className="more">...</div>
          </div>
        </div>

        {/* Popup Window */}
        <div className="popup-window" id="popupWindow">
          <div className="popup-header">
            <div>Messages <span>4</span></div>
            <button onClick={() => {}}>✖</button>
          </div>

          <div className="message">
            <img src="/pics/profile_6.jpg" alt="" />
            <div className="details">
              <p><b>Mohit</b></p>
              <p>Mohit sent an attachment <small>1h</small></p>
            </div>
            <div className="unread-dot"></div>
          </div>

          <div className="message">
            <img src="/pics/profile_4.jpg" alt="" />
            <div className="details">
              <p><b>Lovepreet</b></p>
              <p>Lovepreet sent an attachment <small>1h</small></p>
            </div>
            <div className="unread-dot"></div>
          </div>

          <div className="message">
            <img src="/pics/profile_7.jpg" alt="" />
            <div className="details">
              <p><b>Mohit</b></p>
              <p>Mohit sent an attachment <small>1h</small></p>
            </div>
            <div className="unread-dot"></div>
          </div>

          <div className="message">
            <img src="/pics/profile_5.jpg" alt="" />
            <div className="details">
              <p><b>Nishchal</b></p>
              <p>Nishchal sent an attachment <small>1h</small></p>
            </div>
            <div className="unread-dot"></div>
          </div>

          <div className="message">
            <img src="/pics/profile_3.jpg" alt="" />
            <div className="details">
              <p><b>Lucky</b></p>
              <p>Lucky sent an attachment <small>3h</small></p>
            </div>
          </div>

          <div className="message">
            <img src="/pics/profile_2.jpg" alt="" />
            <div className="details">
              <p><b>Ishpreet Singh</b></p>
              <p>Ishpreet Singh sent an attachment <small>10h</small></p>
            </div>
          </div>
        </div>

        {/* Share Popup */}
        <div id="sharePopup" className="popup">
          <div className="popup-content">
            <span className="close" onClick={() => {}}>&times;</span>
            <h2>Share Reel</h2>
            <input type="text" placeholder="Search user..." id="searchUser" />

            <div className="share-list">
              <div className="user"><img src="/pics/profile_2.jpg" alt="" /><p>Ishpreet Singh</p></div>
              <div className="user"><img src="/pics/profile_6.jpg" alt="" /><p>Mohit</p></div>
              <div className="user"><img src="/pics/profile_5.jpg" alt="" /><p>Nishchal</p></div>
              <div className="user"><img src="/pics/profile_3.jpg" alt="" /><p>Lucky Arora</p></div>
              <div className="user"><img src="/pics/profile_11.jpg" alt="" /><p>Kanav</p></div>
              <div className="user"><img src="/pics/profile_10.jpg" alt="" /><p>Lavnish</p></div>
            </div>

            <div className="share-options">
              <button><i className="fas fa-link"></i> Copy Link</button>
              <button><i className="fab fa-facebook"></i> Facebook</button>
              <button><i className="fab fa-whatsapp"></i> WhatsApp</button>
              <button><i className="fas fa-envelope"></i> Email</button>
              <button><i className="fab fa-x-twitter"></i> X</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;