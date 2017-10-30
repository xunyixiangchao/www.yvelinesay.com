import React, { Component } from 'react';
import './aboutme.css';

import BasicInfo from "../BasicInfo/BasicInfo";
import NavBar from "../NavBar/NavBar";
import BrandStatement from "../BrandStatement/BrandStatement";

class AboutMe extends Component {

  render() {
    return (
      <div className="AboutMe">
        <BasicInfo />
        <NavBar />
        <BrandStatement />
      </div>
    );
  }

}

export default AboutMe;
