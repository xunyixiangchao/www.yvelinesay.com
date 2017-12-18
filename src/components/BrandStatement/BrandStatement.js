import React, { Component } from 'react';
import './brandstatement.css';


class BrandStatement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appeared: false
    }

    this.onScroll = this.onScroll.bind(this);
  }

  componentWillMount() {
    document.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.onScroll);
  }

  onScroll(event) {
    const top  = window.pageYOffset || document.documentElement.scrollTop;

    if ((top > window.innerHeight * 0.2) && (!this.state.appeared)) {
      this.setState({
        appeared: true
      })
    }
  }

  render() {
    return (
      <div id='about-me'>
        <div className={`BrandStatement ${this.state.appeared ? 'appearBrandStat' : 'hide'}`}>

          <div className='mypicDiv'>
            <img className='mypic' src='/images/me.jpg' alt=' '/>
          </div>
          <div className='brandStatementPContainer'>
            <p className='brandStatementP'>
              My background in corporate real estate strategy and team management has taught me how
                to be focused, organized and to work with others. My fascination for technical skills, and more specifically for logical
                problem solving, lead me to changing careers and becoming a web developer. I am described by others as determined,
                fast-learner and lively minded. I am someone with a strong desire for a challenge, who does what she is passionate about
              with a lot of motivation and precision. <br />
              My motto is that anything in life can be reached with work, patience, collaboration and positive energy.
            </p>
          </div>

        </div>

      </div>
    );
  }
}

export default BrandStatement;
