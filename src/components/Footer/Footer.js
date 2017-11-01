import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="FooterContainer">
        <div className="Footer">
          <p>Made with <span className="heartfooter">&#9829;</span> by Yveline Say</p>
          <p>Code available on github</p>
          <p>Copyright &#169; 2017 Yveline Say. All rights reserved.</p>
        </div>
      </div>
    );
  }
}

export default Footer;
