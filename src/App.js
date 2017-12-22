import React, { Component } from 'react';
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Credits from "./components/Credits/Credits";
import './App.css';

class App extends Component {
  state = {
    credits:false
  }

  toggleCredits = () => {
    const { credits } = this.state;
    credits ? this.setState({credits:false}) : this.setState({credits:true})
  }

  render() {
    const { credits } = this.state;
    return (
      <div className="App">
        <div className="Content">
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
          <Footer
            toggleCredits={this.toggleCredits}
            credits={credits} />
            {credits &&
              <Credits />
            }
        </div>
      </div>
    );
  }
}

export default App;
