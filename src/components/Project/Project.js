import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Separator from "../Separator/Separator";
import './project.css';

class Project extends Component {
  state = {
    appeared: false,
  }

  static propTypes = {
    color: PropTypes.string.isRequired,
    top: PropTypes.number.isRequired,
    technology: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    linkToGit: PropTypes.string.isRequired,
    linkToWeb: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
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
    const { color } = this.props;
    this.projectContainer.style.backgroundColor = color;
    this.onResize();
  }

  onResize = (event) => {
    const { top } = this.props;
    if (window.innerWidth > 611) {
      if (top % 2 === 0) {
        this.project.style.flexDirection = 'row';
      } else {
        this.project.style.flexDirection = 'row-reverse';
      }
    } else {
        this.project.style.flexDirection = 'column-reverse';
    }
  }

  onScroll = (event) => {
    const { top } = this.props;
    const topPage = window.pageYOffset || document.documentElement.scrollTop;
    const appear = (window.innerHeight * (2.2 + (top * 0.6)));
    if ((topPage > appear) && (!this.state.appeared)) {
      this.setState({ appeared: true })
    }
  }

  renderTechnology = () => {
    const { technology } = this.props;
    return technology.map( (e,id) => {
      return(
        <img alt={e} key={id}
             draggable="false"
             className='skilltechno'
             src={`./images/${e}.png`} />
      )
    })
  }

  render() {
    const { appeared } = this.state;
    const { title, description, linkToGit, linkToWeb, image, top, color } = this.props;
    return (
      <div className="ProjectContainer" ref={element => this.projectContainer = element}>
          <div className={`Project ${appeared ? 'appearedProject' : 'hide'}`} ref={element => this.project = element}>
            <div className="ProjectTextContainer">
              <div className="ProjectText">
                <div className="titleContainer">
                  <p className="title">{title}</p>
                  <span className="technology">{this.renderTechnology()}</span>
                </div>
                <p className="description">
                  {description}
                </p>
                <div className="accessProject">
                  <a className="linkToProject github" href={linkToGit} target="_blank">VIEW REPO</a>
                  <a className="linkToProject web" href={linkToWeb} target="_blank">VIEW APP</a>
                </div>
              </div>
            </div>
            <div className="imageProjectDivContainer">
              <img className="imageProject" alt={title} src={image} />
            </div>
          </div>

          <Separator
            positionPage="On"
            positionSeparator="-6vh"
            rightAngle={top%2===0?'Right':'Left'}
            color={color}
            />
      </div>
    );
  }
}

export default Project;
