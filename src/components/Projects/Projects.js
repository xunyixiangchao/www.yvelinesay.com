import React, { Component } from 'react';
import Project from '../Project/Project';
import './projects.css';

class Projects extends Component {
  state = {
    numberProjects: 0,
    topPage: null,
    projects:[{
        title:'Meteo Fly High',
        technology:['React', 'express', 'nodejs', 'psql', 'restapi'],
        description:'Save your favorite cities in the world and know the weather in a glance!',
        linkToGit:'https://github.com/yvln/meteo-flyhigh-react',
        linkToWeb:'https://meteo-flyhigh-react.netlify.com',
        image:'./images/flyhigh.gif',
        color:'white',
      },{
        title:'Be EUrself',
        technology:['React', 'express', 'nodejs', 'psql', 'restapi'],
        description:'Learn more about Europe in playing with this 6 mini-games',
        linkToGit:'https://github.com/yvln/beeu-react',
        linkToWeb:'https://beeurself.netlify.com/',
        image:'./images/beeu.png',
        color:'rgb(250,250,250)',
      },{
        title:'Git Hired',
        technology:['React', 'express', 'nodejs', 'psql', 'restapi'],
        description:'GitHired aims to give users a centralized location for all of their job search management needs.',
        linkToGit:'https://github.com/yvln/githired-react',
        linkToWeb:'https://githired.netlify.com/',
        image:'./images/githired.png',
        color:'white',
      },{
        title:'Calendar',
        technology:['Redux', 'React', 'css'],
        description:'Write down your memos on this calendar!',
        linkToGit:'https://github.com/yvln/calendar-react-redux',
        linkToWeb:'https://calendarys.netlify.com/',
        image:'./images/calendar.png',
        color:'rgb(250,250,250)',
      },{
        title:'Remembook',
        technology:['html', 'css', 'js', 'jquery', 'nodejs', 'express', 'psql', 'restapi'],
        description:"The 'anti-facebook' app. Not focus on your face but on your mind. Not focus on others's life but on yours.",
        linkToGit:'https://github.com/yvln/remembook-express-jquery',
        linkToWeb:'https://project-remembook.herokuapp.com/',
        image:'./images/remembook.png',
        color:'white',
      },{
        title:'BattleShip',
        technology:['html', 'css', 'js', 'jquery'],
        description:"The famous game BattleShip online. The first one to have sunk all of the other's ships wins!",
        linkToGit:'https://github.com/yvln/battleship-jquery',
        linkToWeb:'https://yvln.github.io/battleship-jquery/',
        image:'./images/battleship.png',
        color:'rgb(250,250,250)',
      }]
  }

  componentDidMount() {
    this.setState({
      numberProjects: this.projectsContainer.childNodes[0].childElementCount
    })
    this.getTop();
  }

  componentWillMount() {
    window.addEventListener('resize', this.getTop);
    window.addEventListener('scroll', this.getTop);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getTop);
    window.removeEventListener('scroll', this.getTop);
  }

  getTop = () => {
    this.setState({getTop: this.projectsContainer.offsetTop})
  }

  renderProjects = () => {
    const { projects, getTop } = this.state;
    return projects.map( (project,index) => {
      return (
        <Project key={index}
          id={index}
          referenceTop={getTop}
          title={project.title}
          technology={project.technology}
          description={project.description}
          linkToGit={project.linkToGit}
          linkToWeb={project.linkToWeb}
          image={project.image}
          color={project.color}
        />
      )
    })
  }

  render() {
    return (
    <div id='projects' ref={element => this.projectsContainer = element}>
      <div className='Projects'>
        {this.renderProjects()}
      </div>
    </div>
    );
  }
}

export default Projects;
