import React, { Component } from 'react';
import './projects.css';

import Project from "../Project/Project";

class Projects extends Component {
  render() {
    return (
      <div className="ProjectsContainer">
        <div className="Projects">

          <Project
            title="Git Hired"
            technology= "ReactJS, ExpressJS, NPM, PSQL, RESTful API"
            description="With so many job search websites out there it can be hard to track things
            like which jobs you’ve seen, when you applied, and who you’ve spoken to. GitHired aims
            to solve this problem by giving users a centralized location for all of their job search
            management needs."
            linkToGit="https://github.com/rohara-gleveline"
            linkToWeb="http://githiredpotoo.surge.sh/"
            image="./images/githired.png"
          />

          <Project
            title="Meteo Fly High"
            technology= "ReactJS, ExpressJS, NPM, PSQL, RESTful API"
            description="Save your favorite cities in the world and know the weather in a glance!"
            linkToGit="https://git.generalassemb.ly/flyhigh"
            linkToWeb="https://git.generalassemb.ly/flyhigh"
            image="./images/flyhigh.png"
          />

          <Project
            title="Remembook"
            technology= "HTML, CSS, JS, jQuery, NPM, ExpressJS, PassportJS, PSQL, RESTful API"
            description="The 'anti-facebook' app. Not focus on your face but on your mind.
            Not focus on others's life but on yours."
            linkToGit="https://git.generalassemb.ly/yvln-ga/project2-remembook"
            linkToWeb="https://project-remembook.herokuapp.com/"
            image="./images/remembook.png"
          />

          <Project
            title="BattleShip"
            technology= "HTML, CSS, JS, jQuery"
            description="Each player secretly arranges five ships on their primary grid :
            A carrier, a battleship, a cruiser, a submarine and a destroyer.
            Each ship occupies a number of consecutive squares on the grid."
            linkToGit="https://git.generalassemb.ly/yvln-ga/project1-battleship"
            linkToWeb="https://git.generalassemb.ly/pages/yvln-ga/project1-battleship/"
            image="./images/battleship.png"
          />

        </div>
    </div>
    );
  }
}

export default Projects;
