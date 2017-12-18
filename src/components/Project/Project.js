import React, { Component } from 'react';
import './project.css';

import Separator from "../Separator/Separator";

class Project extends Component {

  state = {
    appeared: false,
  }

  componentWillMount() {
    document.addEventListener('scroll', this.onScroll);
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.onSrcoll);
    window.removeEventListener('resize', this.onResize);
  }

  componentDidMount() {
    this.projectContainer.style.backgroundColor = this.props.color;
    this.onResize();
  }

  onResize = (event) => {
    if (window.innerWidth > 611) {
      if (this.props.top%2 === 0) {
        this.project.style.flexDirection = 'row';
      } else {
        this.project.style.flexDirection = 'row-reverse';
      }
    } else {
        this.project.style.flexDirection = 'column-reverse';
    }
  }

  onScroll = (event) => {
    const top  = window.pageYOffset || document.documentElement.scrollTop;
    const appear = (window.innerHeight * (2.2 + (this.props.top * 0.6)));
    if ((top > appear) && (!this.state.appeared)) {
      this.setState({ appeared: true })
    }
  }

  renderTechnology = () => {
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
      <div className="ProjectContainer" ref={element => this.projectContainer = element}>
          <div className={`Project ${this.state.appeared ? 'appearedProject' : 'hide'}`} ref={element => this.project = element}>
            <div className="ProjectTextContainer">
              <div className="ProjectText">
                <div className="titleContainer">
                  <p className="title">{this.props.title}</p>
                  <span className="technology">{this.renderTechnology()}</span>
                </div>
                <p className="description">
                  {this.props.description}
                </p>
                <div className="accessProject">
                  <a className="linkToProject github" href={this.props.linkToGit} target="_blank">VIEW REPO</a>
                  <a className="linkToProject web" href={this.props.linkToWeb} target="_blank">VIEW APP</a>
                </div>
              </div>
            </div>
            <div className="imageProjectDivContainer">
              <img className="imageProject" alt={this.props.title} src={this.props.image} />
            </div>
          </div>

          <Separator
            positionPage="On"
            positionSeparator="-6vh"
            rightAngle={this.props.top%2===0?'Right':'Left'}
            color={this.props.color}
            />
      </div>
    );
  }
}

export default Project;
