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

  componentDidMount() {
    this.setGreeting();
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

  render() {
    return (
      <div className="BasicInfoContent">
        <div className="BasicInfo">

          <p className='basicInfoGreeting'>
            {this.state.greeting}
          </p>
          <Clock />
          <p className='basicInfoP'>
            I am Yveline,  a passionate React Front-end Developer.
          </p>

        </div>
      </div>
    );
  }
}

export default BasicInfo;
