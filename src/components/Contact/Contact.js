import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="ContactContainer">
        <div className="Contact">
          <div className="LinkedIn">
            <a href="https://www.linkedin.com/in/yveline-say/" target="_blank" ><img src="./images/linkedin.png" className="contactIcon" /></a>
          </div>
          <div className="GitHub">
            <a href="https://github.com/yvln" target="_blank" ><img src="./images/github.png" className="contactIcon" /></a>
          </div>
          <div className="Email">
            <a href="mailto:sayyveline@gmail.com" target="_blank" ><img src="./images/email.png" className="contactIcon" /></a>
          </div>
          <div className="Twitter">
            <a href="https://twitter.com/YvelineSay" target="_blank" ><img src="./images/twitter.png" className="contactIcon" /></a>
          </div>
          <div className="Instagram">
            <a href="https://www.instagram.com/xiaoolei/" target="_blank" ><img src="./images/instagram.png" className="contactIcon" /></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
