import React, { Component } from 'react';
import './projects.css';

import Project from "../Project/Project";

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allproject: ["1", "2", "3", "4", "5"],
      githiredtechno: ["React", "express", "nodejs", "psql", "restapi"],
      meteo: ["React", "express", "nodejs", "psql", "restapi"],
      remembook: ["html", "css", "js", "jquery", "nodejs", "express", "psql", "restapi"],
      battleship: ["html", "css", "js", "jquery"],
      notedtechno: ["React", "express", "css", "electron"],
      current: "2"
    }

    this.renderNavProject = this.renderNavProject.bind(this);
    this.changeCurrent = this.changeCurrent.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.toScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.toScroll);
  }

  renderNavProject() {
    const allProjectNav = [];
    this.state.allproject.map(e => {
      return (
        allProjectNav.push(
          <div key={e} onClick={ () => {this.changeCurrent(e)}}>
            <img className={`${this.state.current === e ? 'activeButtonNavProject' : 'passiveButtonNavProject'}`} src="./images/buttonnavproject.png" alt="x" />
          </div>
        )
      )
    })
    return allProjectNav;
  }

  changeCurrent(which) {
    this.setState({
      current: which
    });
    let howMany = parseInt(this.state.current) - parseInt(which);
    this.scroll.style.left = `${this.scroll.offsetLeft + (howMany * parseInt(document.querySelector(".Project").offsetWidth))}px`;
  }

  render() {
    return (
      <div id="ProjectsContainer">

        <div className="NavProject">
          {this.renderNavProject()}
        </div>

        <div className="Projects">
          <div className="ProjectsScroll" ref={(el) => {this.scroll = el}} >

            <Project
              ref={(el) => {this.project = el}}
              classNameProject="1"
              changeCurrent={this.changeCurrent}
              whichCurrent={this.state.current}
              title="Noted."
              technology={this.state.notedtechno}
              description="Little Note app while using Electron for the first time!"
              linkToGit="https://github.com/electron-WDI"
              linkToWeb="http://electron-libre.surge.sh/"
              image="./images/noted.png"
            />

            <Project
              classNameProject="2"
              changeCurrent={this.changeCurrent}
              whichCurrent={this.state.current}
              title="Meteo Fly High"
              technology={this.state.meteo}
              description="Save your favorite cities in the world and know the weather in a glance!"
              linkToGit="https://git.generalassemb.ly/flyhigh"
              linkToWeb="http://flyhigh.surge.sh/"
              image="./images/flyhigh.png"
            />

            <Project
              classNameProject="3"
              changeCurrent={this.changeCurrent}
              whichCurrent={this.state.current}
              title="Git Hired"
              technology={this.state.githiredtechno}
              description="GitHired aims to give users a centralized location for all of their job search management needs."
              linkToGit="https://github.com/rohara-gleveline"
              linkToWeb="http://githiredpotoo.surge.sh/"
              image="./images/githired.png"
            />

            <Project
              classNameProject="4"
              changeCurrent={this.changeCurrent}
              whichCurrent={this.state.current}
              title="Remembook"
              technology={this.state.remembook}
              description="The 'anti-facebook' app. Not focus on your face but on your mind. Not focus on others's life but on yours."
              linkToGit="https://git.generalassemb.ly/yvln-ga/project2-remembook"
              linkToWeb="https://project-remembook.herokuapp.com/"
              image="./images/remembook.png"
            />

            <Project
              classNameProject="5"
              changeCurrent={this.changeCurrent}
              whichCurrent={this.state.current}
              title="BattleShip"
              technology={this.state.battleship}
              description="The famous game BattleShip online. The first one to have sunk all of the other's ships wins!"
              linkToGit="https://git.generalassemb.ly/yvln-ga/project1-battleship"
              linkToWeb="https://git.generalassemb.ly/pages/yvln-ga/project1-battleship/"
              image="./images/battleship.png"
            />

          </div>
        </div>

    </div>
    );
  }
}

export default Projects;
