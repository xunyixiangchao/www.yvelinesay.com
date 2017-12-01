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
      <div className={`BoxContainer BoxContainer${this.props.index}`} onClick={() => {this.props.toggleOpen(this.props.index)}}>
        <div className='BoxContent'>
          <div className={`Box Box${this.props.index}`}></div>
          <p className="BoxTitle">{this.props.title}</p>
          <div className="skillContainer">
            {this.renderSkills()}
          </div>
        </div>
      </div>
    );
  }
}

export default Box;
