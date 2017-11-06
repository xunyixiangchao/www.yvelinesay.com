import React, { Component } from 'react';
import './projects.css';

import Project from "../Project/Project";

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      githiredtechno: ["React", "express", "nodejs1", "psql", "restapi"],
      meteo: ["React", "express", "nodejs1", "psql", "restapi"],
      remembook: ["html", "css", "js", "jquery", "nodejs1", "express", "psql", "restapi"],
      battleship: ["html", "css", "js", "jquery"],
      notedtechno: ["React", "express", "css", "electron"]
    }
  }
  render() {
    return (
      <div className="ProjectsContainer">
        <div className="Projects">
            <Project
              title="Noted."
              technology={this.state.notedtechno}
              description="Little Note app while using Electron for the first time!"
              linkToGit="https://github.com/electron-WDI"
              image="./images/noted.png"
            />
            {/* linkToWeb="http://githiredpotoo.surge.sh/" */}

            <Project
              title="Git Hired"
              technology={this.state.githiredtechno}
              description="It can be hard to track which jobs you’ve seen, when you applied, and who
              you’ve spoken to. GitHired aims to solve this problem by giving users a centralized
              location for all of their job search management needs."
              linkToGit="https://github.com/rohara-gleveline"
              linkToWeb="http://githiredpotoo.surge.sh/"
              image="./images/githiredsquare.png"
            />

            <Project
              title="Meteo Fly High"
              technology={this.state.meteo}
              description="Save your favorite cities in the world and know the weather in a glance!"
              linkToGit="https://git.generalassemb.ly/flyhigh"
              image="./images/flyhighsquare.png"
            />
            {/* linkToWeb="https://git.generalassemb.ly/flyhigh" */}

            <Project
              title="Remembook"
              technology={this.state.remembook}
              description="The 'anti-facebook' app. Not focus on your face but on your mind.
              Not focus on others's life but on yours."
              linkToGit="https://git.generalassemb.ly/yvln-ga/project2-remembook"
              linkToWeb="https://project-remembook.herokuapp.com/"
              image="./images/remembooksquare.png"
            />

            <Project
              title="BattleShip"
              technology={this.state.battleship}
              description="Each player secretly arranges five ships on their primary grid,
              and each ship occupies a number of consecutive squares on the grid.
              The first one to have sunk all of the other's ships wins!"
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
