import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaBars } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div id="main_nav">
      <header>
        <Link to="/" className="logo"><FaInstagram /></Link>
        <nav>
          <Link to="/"><i className="fas fa-home"></i></Link>
          <Link to="/search"><i className="fas fa-search"></i></Link>
          <Link to="/explore"><i className="far fa-compass"></i></Link>
          <Link to="/reel"><i className="fas fa-video"></i></Link>
          <Link to="/messages"><i className="fab fa-facebook-messenger"></i></Link>
          <Link to="/notification"><i className="far fa-heart"></i></Link>
          <Link to="/create"><i className="fas fa-plus-square"></i></Link>
          <Link to="/profile">
            <img src="/pics/profile_1.jpg" alt="Profile" className="icon" />
          </Link>
          <br /><br /><br /><br /><br />
          <Link to="/more"><FaBars /></Link>
        </nav>
      </header>
    </div>
  );
};

export default Sidebar;
