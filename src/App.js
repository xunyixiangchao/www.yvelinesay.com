import React, { Component } from 'react';
import './App.css';

import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Credits from "./components/Credits/Credits";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {credits:false}
    this.toggleCredijuts = this.toggleCredits.bind(this);
  }

  toggleCredits() {
    this.state.credits ? this.setState({credits:false}) : this.setState({credits:true})
  }

  render() {
    return (
      <div className="App">
        <div className="Content">
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
          <Footer
            toggleCredits={this.toggleCredits}
            credits={this.state.credits} />
          {this.state.credits &&
            <Credits />
          }
        </div>
      </div>
    );
  }
}

export default App;
