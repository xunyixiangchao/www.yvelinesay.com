import React, { Component } from 'react';
import './project.css';

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectClicked: ""
    }

    this.renderTechnology = this.renderTechnology.bind(this);
  }

  renderTechnology() {
    const allTech = []
    this.props.technology.map(e => {
      return allTech.push(
        <img alt={e} key={e} draggable="false" className='skilltechno' src={`./images/${e}.png`} />
      )
    })
    return allTech
  }

  render() {
    return (
      <div className={`Project Project${this.props.classNameProject} ${this.props.whichCurrent === this.props.classNameProject ? 'currentProject' : 'notCurrentProject'}`}
           onClick={ () => {this.props.changeCurrent(this.props.classNameProject)} }>
        <div className="ProjectText">
          <div className="title">{this.props.title}</div>
          <div className="technology">{this.renderTechnology()}</div>
          <div className="paragraphContainer">
            <div className="description">
              {this.props.description}
            </div>
            <div className="links">
              <a href={this.props.linkToGit} target="_blank"><img alt="gihub" src="./images/github.png" draggable="false" className="imgProject" /></a>
              <a href={this.props.linkToWeb} target="_blank"><img alt="web" src="./images/web.png" draggable="false" className="imgProject" /></a>
            </div>
          </div>
        </div>
        <div className="imageProjectDivContainer">
          <img className="imageProject" alt={this.props.title} src={this.props.image} />
        </div>
      </div>
    );
  }
}

export default Project;
