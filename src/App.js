import React, { Component } from 'react';
import './App.css';

import AboutMe from "./components/AboutMe/AboutMe";
import Nav from "./components/Nav/Nav";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="Content">
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
