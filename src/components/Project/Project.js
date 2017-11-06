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
      return allTech.push(
        <img alt={e} key={e} draggable="false" className='skilltechno' src={`./images/${e}.png`} />
      )
    })
    return allTech
  }

  render() {
    return (
      <div className="ProjectContainer">
        {this.props.display === this.props.classNameProject &&
          <div className="Project">
            <div className="ProjectText">
              <div className="title">{this.props.title}</div>
              <div className="technology">{this.renderTechnology()}</div>
              <div className="description">{this.props.description}</div>
              <div className="links">
                <a href={this.props.linkToGit} target="_blank"><img alt="gihub" src="./images/github.png" draggable="false" className="imgProject" /></a>
                <a href={this.props.linkToWeb} target="_blank"><img alt="web" src="./images/web.png" draggable="false" className="imgProject" /></a>
              </div>
            </div>
            <img className="imageProject" alt={this.props.title} src={this.props.image} />
          </div>
        }

        {this.props.display === (parseInt(this.props.classNameProject)-1).toString() &&
          <div className="ProjectAfter" onClick={ () => {this.props.changeCurrent(this.props.classNameProject)}} >
            <img className="imageProject" alt={this.props.title} src={this.props.image} />
          </div>
        }

        {this.props.display === (parseInt(this.props.classNameProject)+1).toString() &&
          <div className="ProjectBefore" onClick={ () => {this.props.changeCurrent(this.props.classNameProject)}} >
            <img className="imageProject" alt={this.props.title} src={this.props.image} />
          </div>
        }

      </div>
    );
  }
}

export default Project;
