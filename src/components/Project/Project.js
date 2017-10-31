import React, { Component } from 'react';
import './project.css';

class Project extends Component {
  render() {
    return (
      <div className="Project">
      <img className="image" src={this.props.image} />
      <div className="ProjectText">
        <div className="title">{this.props.title}</div>
        <div className="technology">Technology: {this.props.technology}</div>
        <div className="description">{this.props.description}</div>
        <div className="links">
          <a href={this.props.linkToGit} target="_blank"><img className="imgGit" src="./images/github.png" /></a>
          <a href={this.props.linkToWeb} target="_blank"><img className="imgWeb" src="./images/web.png" /></a>
        </div>
      </div>
      </div>
    );
  }
}

export default Project;
