import React from "react";
import "./Header.css";
import profileImage from "../images/profile.png"; // Correct file name and path


function Header() {
  return (
    <header className="header">
      <div className="profile-container">
        <img
          className="profile-picture"
          src={profileImage}
          alt="Profile"
        />
      </div>
      <h1>My Portfolio</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
