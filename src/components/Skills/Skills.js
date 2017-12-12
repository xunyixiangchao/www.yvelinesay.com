import React, { Component } from 'react';
import './skills.css';

import Box from '../Box/Box';

class Skills extends Component {
  constructor(props){
    super(props);

    this.state = {
      skillsF:["React JS", "Redux", "jQuery", "JavaScript", "Electron", "Ruby", "CSS", "HTML"],
      imagesF:["/images/react.png", "/images/redux.png", "/images/jquery.png", "/images/JS.png", "/images/electron.png", "/images/ruby.png", "/images/css.png", "/images/html.png"],
      skillsB:["Node JS", "Express JS", "Ruby on Rails", "RESTful API", "PSQL"],
      imagesB:["/images/nodejs.png", "/images/express.png", "/images/rubyonrails.png", "/images/restapi.png", "/images/psql.png"],
      skillsT:["Atom", "Hyper", "Slack", "Github", "Spotify", "Postman", "Expo"],
      imagesT:["/images/atom.png", "/images/hyper.gif", "/images/slack.png", "/images/github.png", "/images/spotify.png", "/images/postman.png", "/images/expo.png"],
      skillsO:["Piano", "Travel", "Cook", "Social Media"],
      imagesO:["/images/piano.png", "/images/travel.png", "/images/cook.png", "/images/socialmedia.png"],
      appeared: false,
    }

    this.onScroll = this.onScroll.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  componentWillMount() {
    document.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.onScroll);
  }

  onScroll(event) {
    const top  = window.pageYOffset || document.documentElement.scrollTop;

    if ((top > window.innerHeight * 1.2) && (!this.state.appeared)) {
      this.setState({
        appeared: true
      })
    } else if ((top < window.innerHeight * 1) && (this.state.appeared)) {
      this.setState({
        appeared: false
      })
    }
  }

  toggleOpen(index) {
    const allBoxes = [...document.querySelectorAll('.BoxContainer')];
    allBoxes.forEach( e => {
      (allBoxes.indexOf(e) !== parseInt(index, 10))
        ? e.classList.remove('open')
        : e.classList.toggle('open')
      })
  }

  render() {
    return (
      <div id="passions">
        <div className={`Skills ${this.state.appeared ? 'appearSkills' : 'hide'}`}>
          <Box title={"Front-End"} index='0'
            toggleOpen={this.toggleOpen}
            skills={this.state.skillsF}
            imgSkills={this.state.imagesF}
            />
          <Box title={"Back-End"} index='1'
            toggleOpen={this.toggleOpen}
            skills={this.state.skillsB}
            imgSkills={this.state.imagesB}
            />
          <Box title={"Tools"} index='2'
            toggleOpen={this.toggleOpen}
            skills={this.state.skillsT}
            imgSkills={this.state.imagesT}
            />
          <Box title={"Other Passions"} index='3'
            toggleOpen={this.toggleOpen}
            skills={this.state.skillsO}
            imgSkills={this.state.imagesO}
            />
        </div>

        <div className="triangleskills">
          <div className="arrowskills"></div>
        </div>

      </div>
    );
  }
}

export default Skills;
