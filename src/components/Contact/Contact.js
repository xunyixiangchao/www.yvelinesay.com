import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
  state = {
    appeared: false
  }

  componentDidMount() {
    this.isAppeared();
  }

  componentWillMount() {
    window.addEventListener('resize', this.isAppeared);
    window.addEventListener('scroll', this.isAppeared);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.isAppeared);
    window.removeEventListener('scroll', this.isAppeared);
  }

  isAppeared = () => {
    const topPage = document.documentElement.scrollTop;
    const windowSize = window.innerHeight;
    if ( topPage >= (this.contactContainer.offsetTop - (windowSize/1.5))) {
      this.setState({
        appeared: true
      })
    }
  }

  render() {
    const { appeared } = this.state;
    return (
      <div id='contact' ref={element => this.contactContainer = element}>
        <div className={`Contact ${appeared ? 'appearContact' : 'hide'}`}>
          <div className='ContactIconsContainer'>
            <div className='ContactIconDiv LinkedIn'>
              <a href='https://www.linkedin.com/in/yveline-say/' rel='noopener noreferrer' target='_blank' ><img draggable='false' alt='linkedin icon' src='./images/linkedin.png' className='contactIcon' /></a>
            </div>
            <div className='ContactIconDiv GitHub'>
              <a href='https://github.com/yvln' rel='noopener noreferrer' target='_blank' ><img draggable='false' alt='github icon' src='./images/github.png' className='contactIcon' /></a>
            </div>
            <div className='ContactIconDiv Email'>
              <a href='mailto:sayyveline@gmail.com' rel='noopener noreferrer' target='_blank' ><img draggable='false' alt='email icon' src='./images/email.png' className='contactIcon' /></a>
            </div>
            <div className='ContactIconDiv Twitter'>
              <a href='https://twitter.com/YvelineSay' rel='noopener noreferrer' target='_blank' ><img draggable='false' alt='twitter icon' src='./images/twitter.png' className='contactIcon' /></a>
            </div>
            <div className='ContactIconDiv Instagram'>
              <a href='https://www.instagram.com/xiaoolei/' rel='noopener noreferrer' target='_blank' ><img draggable='false' alt='instagram icon' src='./images/instagram.png' className='contactIcon' /></a>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Contact;
