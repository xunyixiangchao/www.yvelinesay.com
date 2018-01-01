import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="FooterContainer">
        <div className="Footer">
          <img className="coffeePic" src={`/images/coffee.gif`} alt=" " />
          <p className="pfooter">Made with <span className="heartfooter">&#9829;</span> by Yveline Say</p>
          <p className="pfooter">Code available on <a className="githublinkfooter" href="https://github.com/yvln/mywebsite" rel="noopener noreferrer" target="_blank">github</a></p>
          <p className="pfooter">Copyright &#169; 2017 Yveline Say. All rights reserved.</p>
        </div>
      </div>
    );
  }
}

export default Footer;
