import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

import './navbar.css';

class NavBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="NavBar">
        <div className="NavBarContainer">
          <div className="navItem"><a href=".BasicInfoContent">About Me</a></div>
          <div className="navItem"><a href=".SkillsContainer">Skills</a></div>
          <div className="navItem"><a href=".ProjectsContainer">Projects</a></div>
          <div className="navItem"><a href=".ContactContainer">Contact</a></div>
          </div>
      </div>
    );
  }
}

export default NavBar;
