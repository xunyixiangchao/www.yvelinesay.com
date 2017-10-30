import React, { Component } from 'react';
import './navbar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <div className="navItem"><a href="">About Me</a></div>
        <div className="navItem"><a href="">Skills</a></div>
        <div className="navItem"><a href="">Projects</a></div>
        <div className="navItem"><a href="">Contact</a></div>
      </div>
    );
  }
}

export default NavBar;
