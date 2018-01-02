import React, { Component } from 'react';
import Box from '../Box/Box';
import Separator from '../Separator/Separator';
import './skills.css';

class Skills extends Component {
  state = {
    skillsF:['React JS', 'Redux', 'jQuery', 'JavaScript', 'Electron', 'Ruby', 'CSS', 'HTML'],
    imagesF:['/images/react.png', '/images/redux.png', '/images/jquery.png', '/images/JS.png', '/images/electron.png', '/images/ruby.png', '/images/css.png', '/images/html.png'],
    skillsB:['Node JS', 'Express JS', 'Ruby on Rails', 'RESTful API', 'PSQL'],
    imagesB:['/images/nodejs.png', '/images/express.png', '/images/rubyonrails.png', '/images/restapi.png', '/images/psql.png'],
    skillsT:['Atom', 'Hyper', 'Slack', 'Github', 'Spotify', 'Postman', 'Expo'],
    imagesT:['/images/atom.png', '/images/hyper.gif', '/images/slack.png', '/images/github.png', '/images/spotify.png', '/images/postman.png', '/images/expo.png'],
    skillsO:['Piano', 'Travel', 'Cooking', 'Social Media'],
    imagesO:['/images/piano.png', '/images/travel.png', '/images/cook.png', '/images/socialmedia.png'],
    appeared: false,
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
    if ( topPage >= (this.passionsContainer.offsetTop - (windowSize/1.5))) {
      this.setState({
        appeared: true
      })
    }
  }

  toggleOpen = (index) => {
    const allBoxes = [...document.querySelectorAll('.BoxContainer')];
    allBoxes.forEach( e => {
      (allBoxes.indexOf(e) !== parseInt(index, 10))
        ? e.classList.remove('open')
        : e.classList.toggle('open')
      })
  }

  render() {
    const { appeared, skillsF, imagesF, skillsB, imagesB, skillsT, imagesT, skillsO, imagesO } = this.state;
    return (
      <div id='passions' ref={element => this.passionsContainer = element}>
        <div className={`Skills ${appeared ? 'appearSkills' : 'hide'}`}>
          <Box title={'Front-End'} index='0'
            toggleOpen={this.toggleOpen}
            skills={skillsF}
            imgSkills={imagesF}
            />
          <Box title={'Back-End'} index='1'
            toggleOpen={this.toggleOpen}
            skills={skillsB}
            imgSkills={imagesB}
            />
          <Box title={'Tools'} index='2'
            toggleOpen={this.toggleOpen}
            skills={skillsT}
            imgSkills={imagesT}
            />
          <Box title={'Other Passions'} index='3'
            toggleOpen={this.toggleOpen}
            skills={skillsO}
            imgSkills={imagesO}
            />
        </div>

        <Separator
          positionPage='On'
          positionSeparator='-6vh'
          rightAngle='Left'
          color='rgb(25,74,122)'
          />

      </div>
    );
  }
}

export default Skills;
