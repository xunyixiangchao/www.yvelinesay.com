import React, { Component } from 'react';
import './skills.css';

import Box from '../Box/Box';

class Skills extends Component {
  constructor(props){
    super(props);

    this.state = {
      skillsF:["React JS", "jQuery", "JavaScript", "Ruby", "CSS", "HTML"],
      imagesF:["react", "jquery", "JS", "ruby", "css", "html"],
      skillsB:["Node JS", "Express JS", "RESTful API", "PSQL"],
      imagesB:["nodejs1", "express", "restapi", "psql"]
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
