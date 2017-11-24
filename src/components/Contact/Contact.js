import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      appeared: false
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
    const top  = window.pageYOffset || document.documentElement.scrollTop;

    if ((top > window.innerHeight * 3.4) && (!this.state.appeared)) {
      this.setState({
        appeared: true
      })
    } else if ((top < window.innerHeight * 3.2) && (this.state.appeared)) {
      this.setState({
        appeared: false
      })
    }
  }

  render() {
    return (
      <div id="ContactContainer">
        <div className={`Contact ${this.state.appeared ? 'appearContact' : 'hide'}`}>

          <div className="HireMe">
            <span className="HireMeEn">
              Want to hire me?
            </span>
            <span className="HireMeFr">
              Intéressé(e) par mon profil ?
            </span>
          </div>

          <span className="SayHello">Say Hello!</span>
          <div className="ContactIconsContainer">
            <div className="LinkedIn">
              <a href="https://www.linkedin.com/in/yveline-say/" rel="noopener noreferrer" target="_blank" ><img draggable="false" alt="linkedin icon" src="./images/linkedin.png" className="contactIcon" /></a>
            </div>
            <div className="GitHub">
              <a href="https://github.com/yvln" rel="noopener noreferrer" target="_blank" ><img draggable="false" alt="github icon" src="./images/github.png" className="contactIcon" /></a>
            </div>
            <div className="Email">
              <a href="mailto:sayyveline@gmail.com" rel="noopener noreferrer" target="_blank" ><img draggable="false" alt="email icon" src="./images/email.png" className="contactIcon" /></a>
            </div>
            <div className="Twitter">
              <a href="https://twitter.com/YvelineSay" rel="noopener noreferrer" target="_blank" ><img draggable="false" alt="twitter icon" src="./images/twitter.png" className="contactIcon" /></a>
            </div>
            <div className="Instagram">
              <a href="https://www.instagram.com/xiaoolei/" rel="noopener noreferrer" target="_blank" ><img draggable="false" alt="instagram icon" src="./images/instagram.png" className="contactIcon" /></a>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Contact;
