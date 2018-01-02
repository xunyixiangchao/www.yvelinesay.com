import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Separator from "../Separator/Separator";
import './project.css';

class Project extends Component {
  state = {
    appeared: false,
  }

  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    technology: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    linkToGit: PropTypes.string.isRequired,
    linkToWeb: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }

  componentWillMount() {
    window.addEventListener('resize', this.onResize);
    window.addEventListener('scroll', this.isAppeared);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('scroll', this.isAppeared);
  }

  componentDidMount() {
    const { color } = this.props;
    this.projectContainer.style.backgroundColor = color;
    this.onResize();
    this.isAppeared();
  }

  isAppeared = () => {
    const { referenceTop } = this.props;
    const windowSize = window.innerHeight;
    const topPage = window.pageYOffset || document.documentElement.scrollTop;
    if ( topPage >= ((referenceTop + this.projectContainer.offsetTop) - (windowSize/1.5)) ) {
      this.setState({
        appeared: true
      })
    }
  }

  onResize = (event) => {
    const { id } = this.props;
    if (window.innerWidth > 600) {
      if (id % 2 === 0) {
        this.project.style.flexDirection = 'row';
      } else {
        this.project.style.flexDirection = 'row-reverse';
      }
    } else {
        this.project.style.flexDirection = 'column-reverse';
    }
    this.isAppeared();
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
    const { title, description, linkToGit, linkToWeb, image, color, id } = this.props;
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
            rightAngle={id%2===0?'Right':'Left'}
            color={color}
            />
      </div>
    );
  }
}

export default Project;
