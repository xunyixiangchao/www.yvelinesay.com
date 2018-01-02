import React, { Component } from 'react';
import './textscrollX.css';

class TextScrollX extends Component {
  componentDidMount() {
    this.scrollX()
  }
  componentWillMount() {
    window.addEventListener('resize', this.scrollX);
    window.addEventListener('scroll', this.scrollX);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.scrollX);
    window.removeEventListener('scroll', this.scrollX);
  }

  scrollX = () => {
    const windowHeight = window.innerHeight;
    const topPage = window.pageYOffset || document.documentElement.scrollTop;

    let textScrollPos = 1-(topPage/(windowHeight*.8));

    this.TextScrollX.style.left = `${textScrollPos*100}%`;
  }

  render() {
    return (
      <div className={`TextScrollXContent PresentationContent`}>
        <div className={`TextScrollX Presentation`} ref={element => this.TextScrollX = element}>
            <span className='otherColor'>•</span>
            <span className='space'></span>
            <span className='otherWords'>I am</span>
            <span className='space'></span>
            <span className='otherColor'>Yveline</span>
            <span className='otherWords'>,</span>
            <span className='space'></span>
            <span className='otherWords'>a passionate React Front-End Developer.</span>
            <span className='space'></span>
            <span className='otherColor'>•</span>
        </div>
      </div>
    );
  }
}

export default TextScrollX;
