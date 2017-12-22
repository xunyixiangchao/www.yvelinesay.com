import React, { Component } from 'react';
import './clock.css';

class Clock extends Component {
  state = {
    countSec: 1,
    countMin: 1,
    countHr: 1,
  }

  componentDidMount() {
    this.setIntervalHands();
  }

  setClockHands = () => {
    const secondsNow = new Date().getSeconds();
    const secondsDegree = (secondsNow / 60 * 360) + 90;
    const minutesNow = new Date().getMinutes();
    const minutesDegree = (minutesNow / 60 * 360) + 90;
    const hoursNow = new Date().getHours();
    const hoursDegree = (hoursNow / 12 * 360) + 90;

      if (secondsDegree === 444) {
        this.setState({
          countSec : this.state.countSec +1
        })
      }
    this.secondsHand.style.transform = "rotate("+secondsDegree+"deg)";

      if (minutesDegree === 444) {
        this.setState({
          countMin : this.state.countMin +1
        })
      }
    this.minutesHand.style.transform = "rotate("+minutesDegree+"deg)";

      if (hoursDegree === 444) {
        this.setState({
          countHr : this.state.countHr +1
        })
      }
    this.hoursHand.style.transform = "rotate("+hoursDegree+"deg)";
  }

  setIntervalHands = () => {
    setInterval(this.setClockHands, 1000)
  }

  render() {
    return(
      <div className='clock'>
        <div className="heart">&#9829;</div>
        <div className="hand hours-hand" ref={(hoursHand => {this.hoursHand = hoursHand})}></div>
        <div className="hand minutes-hand" ref={(minutesHand => {this.minutesHand = minutesHand})}></div>
        <div className="hand seconds-hand" ref={(secondsHand => {this.secondsHand = secondsHand})}></div>
      </div>
    )
  }
}

export default Clock;
