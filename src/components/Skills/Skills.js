import React, { Component } from 'react';
import './skills.css';

import Box from '../Box/Box';

class Skills extends Component {
  constructor(props){
    super(props);

    this.state = {
      skillsF:["React JS", "jQuery", "JavaScript", "CSS", "HTML"],
      imagesF:["./images/React.png", "./images/jquery.png", "./images/JS.png", "./images/css.png", "./images/html.png"],
      skillsB:["Node JS", "NPM", "RESTful API", "PSQL"],
      imagesB:["./images/nodejs1.png", "./images/npm.png", "./images/restapi.png", "./images/psql.png"]
    }

  }

  render() {
    return (
      <div className="SkillsContainer">
        <div className="Skills">
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
