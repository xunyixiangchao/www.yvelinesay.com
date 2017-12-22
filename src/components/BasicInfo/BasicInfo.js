import React, { Component } from 'react';
import Clock from '../Clock/Clock';
import './basicinfo.css';

class BasicInfo extends Component {
  state = {
    greeting: ''
  }

  componentDidMount() {
    this.setGreeting();
  }

  setGreeting = () => {
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
    const { greeting } = this.state;
    return (
      <div className="BasicInfoContent">
        <div className="BasicInfo">

          <p className='basicInfoGreeting'>
            {greeting}
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
