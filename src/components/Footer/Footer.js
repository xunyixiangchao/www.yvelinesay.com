import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Separator from "../Separator/Separator";
import './footer.css';

class Footer extends Component {
  static propTypes = {
    toggleCredits: PropTypes.func.isRequired,
    credits: PropTypes.bool.isRequired,
  }

  render() {
    const { toggleCredits, credits } = this.props;
    return (
      <div className="FooterContainer">
        <div className="Footer">
          <img className="coffeePic" src={`/images/coffee.gif`} alt=" " />
          <p className="pfooter">Made with <span className="heartfooter">&#9829;</span> by Yveline Say</p>
          <p className="pfooter">Code available on <a className="githublinkfooter" href="https://github.com/yvln/mywebsite" rel="noopener noreferrer" target="_blank">github</a></p>
          <p className="pfooter">Copyright &#169; 2017 Yveline Say. All rights reserved.</p>
          <div className="pfooter credits" onClick={toggleCredits}>credits &#8595;</div>
        </div>
        {credits &&
          <Separator
            positionPage="Bottom"
            positionSeparator="-6vh"
            rightAngle='Left'
            color='black '/>
        }
      </div>
    );
  }
}

export default Footer;
