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
          <div className="skillTitle">{e}</div>
          <img className="imgSkill" src={this.props.imgSkills[this.props.skills.indexOf(e)]} alt={e} />
        </div>
      )
    })
    return eachSkill;
  }

  render() {
    return (
      <div className="Box">
        <div className="BoxTitle">{this.props.title}</div>
          <div className="skillContainer">
            {this.renderSkills()}
          </div>
      </div>
    );
  }
}

export default Box;
