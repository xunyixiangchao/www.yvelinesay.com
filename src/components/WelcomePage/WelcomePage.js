import React, { Component } from 'react';
import './welcomepage.css';

class WelcomePage extends Component {
  state = {
    greeting: ''
  }

  firstLetter = [];
  otherLetters = [];

  componentDidMount() {
    this.setGreeting();
  }

  componentWillMount() {
    window.addEventListener('scroll', this.displayGreetingsScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.displayGreetingsScroll);
  }

  displayGreetingsScroll = () => {
    const topPage = document.documentElement.scrollTop;
    const refHeight = this.WelcomePageContent.offsetHeight*.2;
    const percentageRotation = (topPage / refHeight) * 100;

    const degreeRotation = (percentageRotation/100*90)-90;
    const degreeSpacing = (percentageRotation/100*-34);

    this.firstLetter.forEach(element => {element.style.transform = `rotate(${degreeRotation}deg)`});
    this.otherLetters.forEach(element => {element.style.transform = `translateX(${degreeSpacing}px)`});

    if (topPage >= refHeight) {
      this.firstLetter.forEach(element => {element.style.transform = `rotate(0deg)`});
      this.otherLetters.forEach(element => {element.style.transform = `translateX(-34px)`});
    }
  }

  setGreeting = () => {
    const timeNow = new Date().getHours();
    if ((timeNow >= 5) && (timeNow < 12)) {
      this.setState({ greeting: 'Good Morning' })
    } else if ((timeNow >= 12) && (timeNow < 18)) {
      this.setState({ greeting: 'Good Afternoon' })
    } else if ((timeNow >= 18) || (timeNow < 5)) {
      this.setState({ greeting: 'Good Evening' })
    }
  }

  transform = (str) => {
    return str.split(' ').map( (word,id) => {
      return (
        <div className='greetingsContent' key={id}>
          <div className='firstLetter' ref={element => this.firstLetter.push(element)}>{word.substring(0,1)}</div>
          <div className='otherLetters' ref={element => this.otherLetters.push(element)}> {word.substring(1, word.length)}</div>
        </div>
      )
    })
  }

  render() {
    const { greeting } = this.state;
    return (
      <div className='WelcomePageContent' ref={element => this.WelcomePageContent = element}>
        <div className='WelcomePage'>
          {greeting && this.transform(greeting)}
        </div>
      </div>
    );
  }
}

export default WelcomePage;
