import React, { Component } from 'react';
import BasicInfo from "../BasicInfo/BasicInfo";
import NavBar from "../NavBar/NavBar";
import BrandStatement from "../BrandStatement/BrandStatement";
import Separator from "../Separator/Separator";
import './aboutme.css';

class AboutMe extends Component {
  render() {
    return (
      <div className="AboutMe">
        <BasicInfo />
        <NavBar />
        <BrandStatement />
        <Separator
          positionPage="Bottom"
          positionSeparator="0"
          rightAngle="Left"
          color="rgb(250,250,250)"
        />
      </div>
    );
  }
}

export default AboutMe;
