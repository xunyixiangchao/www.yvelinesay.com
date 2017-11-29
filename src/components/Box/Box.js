import React, { Component } from 'react';
import './box.css';

class Box extends Component {
  constructor(props){
    super(props);

    this.renderSkills = this.renderSkills.bind(this);
  }

  renderSkills() {
    const eachSkill = [];
    this.props.skills.forEach( e => {
      eachSkill.push(
        <div className="skill"key={e}>
          <p className="skillTitle">{e}</p>
          <div className="skillImage">
            <img alt={this.props.imgSkills[this.props.skills.indexOf(e)]}
                 draggable="false"
                 src={this.props.imgSkills[this.props.skills.indexOf(e)]} />
          </div>
        </div>
      )
    })
    return eachSkill;
  }

  render() {
    return (
      <div className="Box">
        <p className="BoxTitle">{this.props.title}</p>
          <div className="skillContainer">
            {this.renderSkills()}
          </div>
      </div>
    );
  }
}

export default Box;
