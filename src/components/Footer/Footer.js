import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coffeepic: "1"
    }
    
    this.switchImage = this.switchImage.bind(this);
  }
  
  componentDidMount() {
    setInterval(this.switchImage, 500);
  }
  
  switchImage() {
    if (this.state.coffeepic === "1") {
      this.setState({
        coffeepic: "2"
      })
    } else {
      this.setState({
        coffeepic: "1"
      })
    }
  }
  
  render() {
    return (
      <div className="FooterContainer">
        <div className="Footer">
          <img
            className="coffeePic"
            src={`/images/coffee${this.state.coffeepic}.png`}
            alt=" " />
          <p className="pfooter">Made with <span className="heartfooter">&#9829;</span> by Yveline Say</p>
          <p className="pfooter">Code available on <a className="githublinkfooter" href="https://github.com/yvln/mywebsite" rel="noopener noreferrer" target="_blank">github</a></p>
          <p className="pfooter">Copyright &#169; 2017 Yveline Say. All rights reserved.</p>
        </div>
      </div>
    );
  }
}

export default Footer;
