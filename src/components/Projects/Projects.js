import React, { Component } from "react";
import "./projects.css";

import Project from "../Project/Project";

class Projects extends Component {

  state = {
    allproject: ["1", "2", "3", "4", "5", "6"],
    calendar: ["Redux", "React", "css"],
    beeu: ["React", "express", "nodejs", "psql", "restapi"],
    githired: ["React", "express", "nodejs", "psql", "restapi"],
    meteo: ["React", "express", "nodejs", "psql", "restapi"],
    remembook: ["html", "css", "js", "jquery", "nodejs", "express", "psql", "restapi"],
    battleship: ["html", "css", "js", "jquery"],
  }

  render() {
    const {calendar, meteo, beeu, githired, remembook, battleship} = this.state;
    return (
    <div id="projects">

      <div className="Projects">


          <Project
            title="Meteo Fly High"
            top={0}
            technology={meteo}
            description="Save your favorite cities in the world and know the weather in a glance!"
            linkToGit="https://github.com/yvln/meteo-flyhigh-react"
            linkToWeb="https://meteo-flyhigh-react.netlify.com"
            image="./images/flyhigh.gif"
            color="white"
          />

          <Project
            title="Be EUrself"
            top={1}
            technology={beeu}
            description="Learn more about Europe in playing with this 6 mini-games"
            linkToGit="https://github.com/yvln/beeu-react"
            linkToWeb="https://beeurself.netlify.com/"
            image="./images/beeu.png"
            color="rgb(250,250,250)"
          />

          <Project
            title="Git Hired"
            top={2}
            technology={githired}
            description="GitHired aims to give users a centralized location for all of their job search management needs."
            linkToGit="https://github.com/yvln/githired-react"
            linkToWeb="https://githired.netlify.com/"
            image="./images/githired.png"
            color="white"
          />

          <Project
            title="Calendar"
            top={3}
            technology={calendar}
            description="Write down your memos on this calendar!"
            linkToGit="https://github.com/yvln/calendar-react-redux"
            linkToWeb="https://calendarys.netlify.com/"
            image="./images/calendar.png"
            color="rgb(250,250,250)"
          />

          <Project
            title="Remembook"
            top={4}
            technology={remembook}
            description="The 'anti-facebook' app. Not focus on your face but on your mind. Not focus on others's life but on yours."
            linkToGit="https://github.com/yvln/remembook-express-jquery"
            linkToWeb="https://project-remembook.herokuapp.com/"
            image="./images/remembook.png"
            color="white"
          />

          <Project
            title="BattleShip"
            top={5}
            technology={battleship}
            description="The famous game BattleShip online. The first one to have sunk all of the other's ships wins!"
            linkToGit="https://github.com/yvln/battleship-jquery"
            linkToWeb="https://yvln.github.io/battleship-jquery/"
            image="./images/battleship.png"
            color="rgb(250,250,250)"
          />

      </div>
    </div>
    );
  }
}

export default Projects;
