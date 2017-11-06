import React, { Component } from 'react';
import './project.css';

class Project extends Component {
  constructor(props) {
    super(props);

    this.renderTechnology = this.renderTechnology.bind(this);
  }

  renderTechnology() {
    const allTech = []
    this.props.technology.map(e => {
      allTech.push(
        <img draggable="false" className='skilltechno' src={`./images/${e}.png`} />
      )
    })
    return allTech
  }

  render() {
    return (
      <div className="Project">
        <img className="image" alt={this.props.title} src={this.props.image} />
        <div className="ProjectText">
          <div className="title">{this.props.title}
            <div className="technology">{this.renderTechnology()}</div>
          </div>
          <div className="description">{this.props.description}</div>
          <div className="links">
            <a href={this.props.linkToGit} target="_blank"><img src="./images/github.png" draggable="false" className="imgProject" /></a>
            <a href={this.props.linkToWeb} target="_blank"><img src="./images/web.png" draggable="false" className="imgProject" /></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
