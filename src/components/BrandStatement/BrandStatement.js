import React, { Component } from 'react';
import './brandstatement.css';

class BrandStatement extends Component {
  render() {
    return (
      <div className="BrandStatementContainer">
        <div className="BrandStatement">
          <p  className="brandStatementP">

            <span className="majLetter">M</span>y admiration for technical skills associated with
            a creative spirit and a logical personnality have led me to a develop a passion for coding.<br />

            <span className="majLetter">A</span>s a previous Property Manager in Corporate Real Estate field,
            coding helped me realize that intellectual challenges were making me feel more satisfied
            in my personal and professional everyday life.<br />

            <span className="majLetter">A</span>fter an honest retrospection and analysis, I decided to follow
            my dreams and change carrier: becoming a <span className="majLetter">W</span>eb <span className="majLetter">D</span>eveloper.
          </p>
        </div>
      </div>
    );
  }
}

export default BrandStatement;
