import React from "react";
import "./style.css";
import Logo from "../../assets/home.svg";

class Header extends React.Component {
  render() {
    return (
      <nav className="nav">
        <div className="search-section">
          <img src={Logo} alt="Header icon" className="logo" />
          <input type="text" placeholder="Search" className="search" />
        </div>
        <ul className="menu">
          <li className="menu-items">Become a host</li>
          <li className="menu-items">Earn credit</li>
          <li className="menu-items">Help </li>
          <li className="menu-items">Sign up </li>
          <li className="menu-items">Log in</li>
        </ul>
      </nav>
    );
  }
}

export default Header;
