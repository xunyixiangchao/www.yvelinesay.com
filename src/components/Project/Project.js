import React, { Component } from 'react';
import './project.css';

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectClicked: ""
    }

    this.renderTechnology = this.renderTechnology.bind(this);
    this.whichClicked = this.whichClicked.bind(this);
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

  whichClicked(which) {
    this.setState({
      projectClicked: which
    })
  }

  render() {
    return (
      <div className="ProjectContainer">
        {this.props.display === this.props.classNameProject &&
          <div className={`Project ${this.state.projectClicked === 'after' ? 'afterClicked' : this.state.projectClicked === 'before' ? 'beforeClicked' : ""}`}>
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
            <img className="imageProject" alt={this.props.title} src={this.props.image} />
          </div>
        }

        {this.props.display === (parseInt(this.props.classNameProject)-1).toString() &&
         <div className={`ProjectAfter ${this.state.projectClicked === 'after' ? 'afterClicked' : "" }`}
               onClick={ () => { setTimeout(this.props.changeCurrent(this.props.classNameProject),1000); this.whichClicked('after')} }>
            <div className="imageProjectDivContainer">
              <img className="imageProject" alt={this.props.title} src={this.props.image} />
              <div className="arrowrightDivContainer">
                <img className="arrowright" alt={`arrowright${this.props.title}`} src="./images/arrowright.png"/>
              </div>
            </div>
          </div>
        }

        {this.props.display === (parseInt(this.props.classNameProject)+1).toString() &&
          <div className={`ProjectBefore ${this.state.projectClicked === 'before' ? 'beforeClicked' : "" }`}
               onClick={ () => { setTimeout(this.props.changeCurrent(this.props.classNameProject),1000); this.whichClicked('before')} } >
            <div className="imageProjectDivContainer">
              <img className="imageProject" alt={this.props.title} src={this.props.image} />
              <div className="arrowleftDivContainer">
                <img className="arrowleft" alt={`arrowright${this.props.title}`} src="./images/arrowleft.png"/>
              </div>
            </div>
          </div>
        }

      </div>
    );
  }
}

export default Project;
