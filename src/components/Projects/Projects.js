import React, { Component } from 'react';
import './projects.css';

import Project from "../Project/Project";

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allproject: ["1", "2", "3", "4", "5"],
      githiredtechno: ["React", "express", "nodejs1", "psql", "restapi"],
      meteo: ["React", "express", "nodejs1", "psql", "restapi"],
      remembook: ["html", "css", "js", "jquery", "nodejs1", "express", "psql", "restapi"],
      battleship: ["html", "css", "js", "jquery"],
      notedtechno: ["React", "express", "css", "electron"],
      isCurrent: "1"
    }

    this.changeCurrent = this.changeCurrent.bind(this);
    this.renderNavProject = this.renderNavProject.bind(this);
  }

  changeCurrent(idProject) {
    this.setState({
      isCurrent: idProject
    })
  }

  renderNavProject() {
    const allProjectNav = [];
    this.state.allproject.map(e => {
      return (
        allProjectNav.push(
          <div key={e}>
            { this.state.isCurrent === e &&
              <div key={e} >
                <img className="activeButtonNavProject" src="./images/buttonnavproject.png" alt="x" />
              </div>
            }
            { this.state.isCurrent !== e &&
              <div key={e} onClick={ () => { setTimeout(this.changeCurrent(e),1000) }}>
                <img className="passiveButtonNavProject" src="./images/buttonnavproject.png" alt="x" />
              </div>
            }
          </div>
        )
      )
    })
    return allProjectNav
  }

  render() {
    return (
      <div id="ProjectsContainer">

        <div className="NavProject">
          {this.renderNavProject()}
        </div>

        <div className="Projects">
            <Project
              classNameProject="1"
              changeCurrent={this.changeCurrent}
              display={this.state.isCurrent}
              title="Meteo Fly High"
              technology={this.state.meteo}
              description="Save your favorite cities in the world and know the weather in a glance!"
              linkToGit="https://git.generalassemb.ly/flyhigh"
              linkToWeb="http://flyhigh.surge.sh/"
              image="./images/flyhighsquare.png"
            />
        
            <Project
              classNameProject="2"
              changeCurrent={this.changeCurrent}
              display={this.state.isCurrent}
              title="Noted."
              technology={this.state.notedtechno}
              description="Little Note app while using Electron for the first time!"
              linkToGit="https://github.com/electron-WDI"
              linkToWeb="http://electron-libre.surge.sh/"
              image="./images/noted.png"
            />

            <Project
              classNameProject="3"
              changeCurrent={this.changeCurrent}
              display={this.state.isCurrent}
              title="Git Hired"
              technology={this.state.githiredtechno}
              description="GitHired aims to give users a centralized location for all of their job search management needs."
              linkToGit="https://github.com/rohara-gleveline"
              linkToWeb="http://githiredpotoo.surge.sh/"
              image="./images/githiredsquare.png"
            />

            <Project
              classNameProject="4"
              changeCurrent={this.changeCurrent}
              display={this.state.isCurrent}
              title="Remembook"
              technology={this.state.remembook}
              description="The 'anti-facebook' app. Not focus on your face but on your mind. Not focus on others's life but on yours."
              linkToGit="https://git.generalassemb.ly/yvln-ga/project2-remembook"
              linkToWeb="https://project-remembook.herokuapp.com/"
              image="./images/remembooksquare.png"
            />

            <Project
              classNameProject="5"
              changeCurrent={this.changeCurrent}
              display={this.state.isCurrent}
              title="BattleShip"
              technology={this.state.battleship}
              description="The famous game BattleShip online. The first one to have sunk all of the other's ships wins!"
              linkToGit="https://git.generalassemb.ly/yvln-ga/project1-battleship"
              linkToWeb="https://git.generalassemb.ly/pages/yvln-ga/project1-battleship/"
              image="./images/battleshipsquare.png"
            />

        </div>
    </div>
    );
  }
}

export default Projects;
