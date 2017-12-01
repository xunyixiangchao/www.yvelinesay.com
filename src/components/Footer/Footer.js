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
          <div className="pfooter credits" onClick={this.props.toggleCredits}>credits &#8595;</div>
        </div>
        {this.props.credits &&
          <div className="trianglefooter">
            <div className="arrowfooter"></div>
          </div>
        }
      </div>
    );
  }
}

export default Footer;
