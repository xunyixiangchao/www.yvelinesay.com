import React, { Component } from 'react';

import NavBar from './components//NavBar/NavBar';
import WelcomePage from './components/WelcomePage/WelcomePage';
import TextScrollX from './components/TextScrollX/TextScrollX';
import BrandStatement from './components/BrandStatement/BrandStatement';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
// import Credits from './components/Credits/Credits';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='Content'>
          <NavBar />
          <WelcomePage />
          <TextScrollX />
          <BrandStatement />
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
