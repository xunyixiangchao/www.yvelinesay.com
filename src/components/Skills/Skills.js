import React, { Component } from 'react';
import './skills.css';

import Box from '../Box/Box';

class Skills extends Component {
  constructor(props){
    super(props);

    this.state = {
      skillsF:["React JS", "jQuery", "JavaScript", "Electron", "Ruby", "CSS", "HTML"],
      imagesF:["/images/react.png", "/images/jquery.png", "/images/JS.png", "/images/electron.png", "/images/ruby.png", "/images/css.png", "/images/html.png"],
      skillsB:["Node JS", "Express JS", "Ruby on Rails", "RESTful API", "PSQL"],
      imagesB:["/images/nodejs.png", "/images/express.png", "/images/rubyonrails.png", "/images/restapi.png", "/images/psql.png"],
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

  render() {
    return (
      <div id="SkillsContainer">
        <div className={`Skills ${this.state.appeared ? 'appearSkills' : 'hide'}`}>
          <Box title={"Front-End"}
            skills={this.state.skillsF}
            imgSkills={this.state.imagesF}
            />
          <Box title={"Back-End"}
            skills={this.state.skillsB}
            imgSkills={this.state.imagesB}
            />
        </div>
      </div>
    );
  }
}

export default Skills;
