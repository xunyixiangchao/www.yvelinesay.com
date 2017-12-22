import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './box.css';

class Box extends Component {
  static propTypes = {
    imgSkills: PropTypes.array.isRequired,
    skills: PropTypes.array.isRequired,
    index: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    toggleOpen: PropTypes.func.isRequired,
  }

  renderSkills = () => {
    const { imgSkills, skills } = this.props;
    return skills.map( e => {
      return(
        <div className="skill"key={e}>
          <p className="skillTitle">{e}</p>
          <div className="skillImage">
            <img alt={imgSkills[skills.indexOf(e)]}
                 draggable="false"
                 src={imgSkills[skills.indexOf(e)]} />
          </div>
        </div>
      )
    })
  }

  render() {
    const { index, title, toggleOpen } = this.props;
    return (
      <div className={`BoxContainer BoxContainer${index}`} onClick={() => {toggleOpen(index)}}>
        <div className='BoxContent'>
          <div className={`Box Box${index}`}></div>
          <p className="BoxTitle">{title}</p>
          <div className="skillContainer">
            {this.renderSkills()}
          </div>
        </div>
      </div>
    );
  }
}

export default Box;
