import React, { Component } from 'react';
import Separator from '../Separator/Separator';
import './brandstatement.css';

class BrandStatement extends Component {
  state = {
    appeared: false
  }

  componentDidMount() {
    this.isAppeared();
  }

  componentWillMount() {
    window.addEventListener('resize', this.isAppeared);
    window.addEventListener('scroll', this.isAppeared);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.isAppeared);
    window.removeEventListener('scroll', this.isAppeared);
  }

  isAppeared = () => {
    const topPage = window.pageYOffset || document.documentElement.scrollTop;
    const windowSize = window.innerHeight;
    if ( topPage >= (this.aboutmeContainer.offsetTop - (windowSize/1.5))) {
      this.setState({
        appeared: true
      })
    }
  }

  render() {
    const { appeared } = this.state;
    return (
      <div id='about-me' ref={element => this.aboutmeContainer = element}>
          <div className={`BrandStatement ${appeared ? 'appearBrandStat' : 'hide'}`}>
            <div className='mypicDiv'>
               { window.innerWidth >= 800 &&
                 <img className='mypic' src='/images/profile-picture-bw2.png' alt=' '/>
               }
               { window.innerWidth < 800 &&
                 <img className='mypic' src='/images/profile-picture-bw.png' alt=' '/>
               }
            </div>
            <div className='brandStatementPContainer'>
              <p className='brandStatementP'>
                My background in corporate real estate strategy and team management has taught me how
                  to be focused, organized and to work with others. My fascination for technical skills, and more specifically for logical
                  problem solving, lead me to changing careers and becoming a web developer. I am described by others as determined,
                  fast-learner and lively minded. I am someone with a strong desire for a challenge, who does what she is passionate about
                with a lot of motivation and precision.
              </p>
              <p className='brandStatementM'>
                My motto is that anything in life can be reached with
                work, patience, collaboration and positive energy.
              </p>
            </div>
        </div>
        <Separator
          positionPage='Bottom'
          positionSeparator='0'
          rightAngle='Left'
          color='rgb(25,74,122)'
        />
      </div>
    );
  }
}

export default BrandStatement;
