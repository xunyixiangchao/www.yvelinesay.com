import React, { Component } from 'react';

import './navbar.css';

class NavBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isFixed: false
    }

    this.onScroll = this.onScroll.bind(this);
    // this.onClickSmooth = this.onClickSmooth.bind(this);
  }

  componentWillMount() {
    document.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.onScroll);
  }

  onScroll(event) {
    const { isFixed } = this.state;
    const top = window.pageYOffset || document.documentElement.scrollTop;

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

  // onClickSmooth(event) {
  //   const cible = event.target.getAttribute('href');
  //   const topCible = window.pageYOffset || document.documentElement.scrollTop;
  //   console.log(topCible);
  //   setTimeOut()
  // }

  render() {
    const { isFixed } = this.state;
    return (
      <div className={`NavBar ${isFixed ? "NavBarFixed" : ""} `}>
        <div className="NavBarContainer">
          <div className="navItem" onClick={this.onClickSmooth}><a href="#about-me">about me</a></div>
          <div className="navItem" onClick={this.onClickSmooth}><a href="#passions">passions</a></div>
          <div className="navItem" onClick={this.onClickSmooth}><a href="#projects">projects</a></div>
          <div className="navItem" onClick={this.onClickSmooth}><a href="#contact">contact</a></div>
        </div>
      </div>
    );
  }
}

export default NavBar;
