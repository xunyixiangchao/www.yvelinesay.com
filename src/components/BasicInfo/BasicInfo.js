import React, { Component } from 'react';
import './basicinfo.css';

import Clock from '../Clock/Clock';

class BasicInfo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      greeting: ""
    }
  }

  setGreeting() {
    const timeNow = new Date().getHours();
    if ((timeNow >= 5) && (timeNow < 12)) {
      this.setState({
        greeting: "Good morning"
      })
    } else if ((timeNow >= 12) && (timeNow < 18)) {
      this.setState({
        greeting: "Good afternoon"
      })
    } else if ((timeNow >= 18) || (timeNow < 5)) {
      this.setState({
        greeting: "Good evening"
      })
    }
  }

  componentDidMount() {
    this.setGreeting();
  }

  render() {
    return (
      <div className="BasicInfoContent">
        <div className="BasicInfo">
          <div className='basicInfoGreeting'>
            {this.state.greeting}
          </div>
          <Clock />
          <div className='basicInfoP'>
            I am Yveline, a passionnated React front-end developer.
          </div>
        </div>
      </div>
    );
  }
}

export default BasicInfo;
