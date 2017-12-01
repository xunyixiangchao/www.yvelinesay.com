import React, { Component } from 'react';
import './credits.css';

class Credits extends Component {
  render() {
    return (
      <div className="CreditsContainer">

        <div className="Credits">

          <div className="websites">JavaScript30:</div>
            <div className="itemListCredit">Clock: <a target='_blank' href='https://courses.wesbos.com/account/access/59b1e980efdeb84f7b533f72/view/e36b397132'>x</a></div>
            <div className="itemListCredit">Passions page animations: <a target='_blank' href='https://courses.wesbos.com/account/access/59b1e980efdeb84f7b533f72/view/79e868b8d2'>x</a></div>

          <div className="websites">Unsplash:</div>
            <div className="itemListCredit">About me page background: <a target='_blank' href='https://unsplash.com/@saltnstreets'>@saltnstreets</a></div>
            <div className="itemListCredit">Passions page backgrounds:
             <div className="passiontitle"> Front-End: <a target='_blank' href='https://unsplash.com/@karishea' target="_blank">@karishea</a></div>
             <div className="passiontitle">Back-End: <a target='_blank' href='https://unsplash.com/@joannakosinska' target="_blank">@joannakosinska</a></div>
             <div className="passiontitle">Tools: <a target='_blank' href='https://unsplash.com/@krisatomic' target="_blank">@krisatomic</a></div>
             <div className="passiontitle">Other Passions: <a target='_blank' href='https://unsplash.com/@melindapack' target="_blank">@melindapack</a></div>
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
