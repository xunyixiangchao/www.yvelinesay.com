import React, { Component } from 'react';
import './credits.css';

class Credits extends Component {
  render() {
    return (
      <div className="CreditsContainer">

        <div className="Credits">

          <div className="websites">Animations:</div>
            <div className="itemListCredit">JavaScript30:
              <div className="passiontitle">Clock: <a rel="noopener noreferrer" target='_blank' href='https://courses.wesbos.com/account/access/59b1e980efdeb84f7b533f72/view/e36b397132'>x</a></div>
              <div className="passiontitle">Passions page animations: <a rel="noopener noreferrer" target='_blank' href='https://courses.wesbos.com/account/access/59b1e980efdeb84f7b533f72/view/79e868b8d2'>x</a></div>
            </div>
            <div className="itemListCredit">Github Repo:
              <div className="passiontitle">Smooth scroll by Alice Lieutier: <a rel="noopener noreferrer" target='_blank' href='https://github.com/alicelieutier/smoothScroll/blob/master/README.md'>x</a></div>
            </div>

          <div className="websites">Images Unsplash:</div>
            <div className="itemListCredit">About me page background: <a rel="noopener noreferrer" target='_blank' href='https://unsplash.com/@saltnstreets'>@saltnstreets</a></div>
            <div className="itemListCredit">Passions page backgrounds:
             <div className="passiontitle">Front-End: <a rel="noopener noreferrer" target='_blank' href='https://unsplash.com/@karishea'>@karishea</a></div>
             <div className="passiontitle">Back-End: <a rel="noopener noreferrer" target='_blank' href='https://unsplash.com/@joannakosinska'>@joannakosinska</a></div>
             <div className="passiontitle">Tools: <a rel="noopener noreferrer" target='_blank' href='https://unsplash.com/@krisatomic'>@krisatomic</a></div>
             <div className="passiontitle">Other Passions: <a rel="noopener noreferrer" target='_blank' href='https://unsplash.com/@melindapack'>@melindapack</a></div>
            </div>

        </div>
      </div>
    );
  }
}

export default Credits;
