import React, { Component } from 'react';
import './separator.css';

class Separator extends Component {

  componentDidMount() {
    let otherAngle, thisMode, otherMode;

    this.props.rightAngle === 'Left' ? otherAngle = 'Right' : otherAngle = 'Left';
    if (this.props.positionPage === 'Bottom') {
      thisMode = 'Bottom';
      otherMode = 'Top';
    } else {
      thisMode = 'Top';
      otherMode = 'Bottom';
    }

    this.separatorDiv.style[`border${this.props.rightAngle}`] = `50vw solid ${this.props.color}`;
    this.separatorDiv.style[`border${otherAngle}`] = `50vw solid transparent`;
    this.separatorDiv.style[`border${thisMode}`] = `3vh solid ${this.props.color}`;
    this.separatorDiv.style[`border${otherMode}`] = `3vh solid transparent`;

    this.separatorContainer.style.bottom = `${this.props.positionSeparator}`;
  }

  render() {
    return (
      <div
          ref={element => this.separatorContainer = element}
          className={`containerSeparator`}>
        <div
          ref={element => this.separatorDiv = element}
          className={`separator`}>
        </div>
      </div>
    )
  }

}

export default Separator;
