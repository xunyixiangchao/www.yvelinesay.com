import React, { Component } from 'react';
import './navbar.css';

class NavBar extends Component {
  state = {
    open: false
  }

  toggleOpen = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const { open } = this.state;
    return (
      <div className={`NavBar NavBar${open ? 'opened' : 'closed'}`}>
        <div className='NavBarContainer'>
          <div onClick={this.toggleOpen}className='NavDisplay'>
            {!open &&
              <img alt='<' src='/images/arrowleft.png'/>
            }
            {open &&
              <img alt='>' src='/images/arrowright.png'/>
            }
          </div>
          <div className='NavItems'>
            <div className='navItem' onClick={this.onClickSmooth}><a href='#about-me'>about me</a></div>
            <div className='navItem' onClick={this.onClickSmooth}><a href='#passions'>passions</a></div>
            <div className='navItem' onClick={this.onClickSmooth}><a href='#projects'>projects</a></div>
            <div className='navItem' onClick={this.onClickSmooth}><a href='#contact'>contact</a></div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
