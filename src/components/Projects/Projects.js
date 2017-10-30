import React, { Component } from 'react';
import './projects.css';

import Project from "../Project/Project";

class Projects extends Component {
  render() {
    return (
      <div className="ProjectsContainer">
        <div className="Projects">

          <Project
            title="BattleShip"
            description="Nanani"
            linkToGit="https://git.generalassemb.ly/yvln-ga/project1-battleship"
            linkToWeb="https://git.generalassemb.ly/pages/yvln-ga/project1-battleship/"
            image="./images/battleship.png"
          />

          <Project
            title="Remembook"
            description="Nanani"
            linkToGit="https://git.generalassemb.ly/yvln-ga/project2-remembook"
            linkToWeb="https://project-remembook.herokuapp.com/"
            image="./images/remembook.png"
          />

          <Project
            title="Meteo Fly High"
            description="Nanani"
            linkToGit="https://git.generalassemb.ly/flyhigh"
            linkToWeb="https://git.generalassemb.ly/flyhigh"
            image="./images/flyhigh.png"
          />

        </div>
    </div>
    );
  }
}

export default Projects;
