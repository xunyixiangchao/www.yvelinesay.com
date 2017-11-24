import React, { Component } from 'react';

import './navbar.css';

class NavBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isFixed: false
    }

    this.onScroll = this.onScroll.bind(this);
  }

  componentWillMount() {
    document.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.onScroll);
  }

  onScroll(event) {
    const { isFixed } = this.state;
    const top  = window.pageYOffset || document.documentElement.scrollTop;

    if ((top > window.innerHeight * 0.9) && !isFixed) {
      this.setState({
        isFixed: true
      })
    } else if (top <= window.innerHeight * 0.9 && isFixed) {
      this.setState({
        isFixed: false
      })
    }
  }

  render() {
    const { isFixed } = this.state;
    return (
      <div className={`NavBar ${isFixed ? "NavBarFixed" : ""} `}>
        <div className="NavBarContainer">
          <div className="navItem"><a href="#BrandStatementContainer">about me</a></div>
          <div className="navItem"><a href="#SkillsContainer">skills</a></div>
          <div className="navItem"><a href="#ProjectsContainer">projects</a></div>
          <div className="navItem"><a href="#ContactContainer">contact</a></div>
          </div>
      </div>
    );
  }
}

export default NavBar;
