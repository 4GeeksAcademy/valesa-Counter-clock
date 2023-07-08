//imports React
import React from "react";
import ReactDOM from "react-dom";
import { PropTypes } from "prop-types";

// FontAwesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Styles
import "../styles/index.css";

function SimpleCounter(props) {
  return (
    <div className="bigCounter">
      <div className="calendar">
        <FontAwesomeIcon icon={faClock} />
      </div>
      <div className="four">{props.DigitSix % 10}</div>
      <div className="four">{props.DigitFive % 10}</div>
      <div className="four">{props.DigitFour % 10}</div>
      <div className="three">{props.DigitThree % 10}</div>
      <div className="two">{props.DigitTwo % 10}</div>
      <div className="one">{props.DigitOne % 10}</div>
    </div>
  );
}

SimpleCounter.prototype = {
  DigitSix: PropTypes.number,
  DigitFive: PropTypes.number,
  DigitFour: PropTypes.number,
  DigitThree: PropTypes.number,
  DigitTwo: PropTypes.number,
  DigitOne: PropTypes.number,
};

let counter = 0;
setInterval(function () {
  const six = Math.floor(counter / 100000);
  const five = Math.floor(counter / 10000);
  const four = Math.floor(counter / 1000);
  const three = Math.floor(counter / 100);
  const two = Math.floor(counter / 10);
  const one = Math.floor(counter / 1);
  counter++;

  ReactDOM.render(
    <SimpleCounter
      DigitOne={one}
      DigitTwo={two}
      DigitThree={three}
      DigitFour={four}
      DigitFive={five}
      DigitSix={six}
    />,
    document.querySelector("#app")
  );
}, 1000);
