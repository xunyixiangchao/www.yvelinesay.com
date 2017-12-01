import React, { Component } from 'react';
import './credits.css';

class Credits extends Component {
  render() {
    return (
      <div className="CreditsContainer">

        <div className="Credits">

          <div className="websites">JavaScript30:</div>
            <div className="itemListCredit">Clock: <a rel="noopener noreferrer" target='_blank' href='https://courses.wesbos.com/account/access/59b1e980efdeb84f7b533f72/view/e36b397132'>x</a></div>
            <div className="itemListCredit">Passions page animations: <a rel="noopener noreferrer" target='_blank' href='https://courses.wesbos.com/account/access/59b1e980efdeb84f7b533f72/view/79e868b8d2'>x</a></div>

          <div className="websites">Unsplash:</div>
            <div className="itemListCredit">About me page background: <a rel="noopener noreferrer" target='_blank' href='https://unsplash.com/@saltnstreets'>@saltnstreets</a></div>
            <div className="itemListCredit">Passions page backgrounds:
             <div className="passiontitle"> Front-End: <a rel="noopener noreferrer" target='_blank' href='https://unsplash.com/@karishea'>@karishea</a></div>
             <div className="passiontitle">Back-End: <a rel="noopener noreferrer" target='_blank' href='https://unsplash.com/@joannakosinska'>@joannakosinska</a></div>
             <div className="passiontitle">Tools: <a rel="noopener noreferrer" target='_blank' href='https://unsplash.com/@krisatomic'>@krisatomic</a></div>
             <div className="passiontitle">Other Passions: <a rel="noopener noreferrer" target='_blank' href='https://unsplash.com/@melindapack'>@melindapack</a></div>
            </div>

        </div>

          <div className="trianglecredits">
            <div className="arrowcredits"></div>
          </div>

      </div>
    );
  }
}

export default Credits;
