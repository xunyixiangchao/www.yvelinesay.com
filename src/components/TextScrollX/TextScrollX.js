import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './textscrollX.css';

class TextScrollX extends Component {

  static propTypes = {
    coeffPage : PropTypes.number.isRequired,
    direction: PropTypes.string.isRequired,
    stopAnimation: PropTypes.string,
    name : PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }

  componentDidMount() {
    this.scrollX()
  }
  componentWillMount() {
    window.addEventListener('resize', this.scrollX);
    window.addEventListener('scroll', this.scrollX);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.scrollX);
    window.removeEventListener('scroll', this.scrollX);
  }

  scrollX = () => {
    const { coeffPage, direction } = this.props;

    const windowHeight = window.innerHeight;
    const topPage = document.documentElement.scrollTop;

    let textScrollPos;
    direction === 'toLeft' ?
      textScrollPos = 1-(topPage/(windowHeight*coeffPage)) :
      textScrollPos = - (1-(topPage/(windowHeight*coeffPage)));

    this.TextScrollX.style.left = `${textScrollPos*100}%`;
  }

  render() {
    const { name, text } = this.props;
    return (
      <div className={`TextScrollXContent ${name}Content`}>
        <div className={`TextScrollX ${name}`} ref={element => this.TextScrollX = element}>
            {text}
        </div>
      </div>
    );
  }
}

export default TextScrollX;
