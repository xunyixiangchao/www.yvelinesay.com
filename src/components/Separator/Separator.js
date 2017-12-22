import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './separator.css';

class Separator extends Component {
  static propTypes = {
    rightAngle: PropTypes.string.isRequired,
    positionPage: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    positionSeparator: PropTypes.string.isRequired,
  }

  componentDidMount() {
    const { rightAngle, positionPage, color, positionSeparator } = this.props;
    let otherAngle, thisMode, otherMode;
    
    rightAngle === 'Left' ? otherAngle = 'Right' : otherAngle = 'Left';
      if (positionPage === 'Bottom') {
        thisMode = 'Bottom';
        otherMode = 'Top';
      } else {
        thisMode = 'Top';
        otherMode = 'Bottom';
      }
    this.separatorDiv.style[`border${rightAngle}`] = `50vw solid ${color}`;
    this.separatorDiv.style[`border${otherAngle}`] = `50vw solid transparent`;
    this.separatorDiv.style[`border${thisMode}`] = `3vh solid ${color}`;
    this.separatorDiv.style[`border${otherMode}`] = `3vh solid transparent`;
    this.separatorContainer.style.bottom = `${positionSeparator}`;
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
