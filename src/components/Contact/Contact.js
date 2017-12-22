import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
  state = {
    appeared: false
  }

  componentWillMount() {
    document.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.onScroll);
  }

  onScroll = (event) => {
    const { appeared } = this.state;

    const doc = document.documentElement.scrollHeight;
    const page = window.innerHeight;
    const top  = window.pageYOffset || document.documentElement.scrollTop;

    if ((top >= doc - (page*1.5)) && (!appeared)) {
      this.setState({
        appeared: true
      })
    }
  }

  render() {
    const { appeared } = this.state;
    return (
      <div id="contact">
        <div className={`Contact ${appeared ? 'appearContact' : 'hide'}`}>

          <div className="HireMe">
            <p className="HireMeEn">
              Want to hire me?
            </p>
            <p className="HireMeFr">
              Intéressé(e) par mon profil ?
            </p>
          </div>

          <p className="SayHello">Say Hello!</p>
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
