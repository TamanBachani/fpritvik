import React from 'react'
import '../../stylesheets/welcome.scss'
import CountUp from "react-countup";
import { ReactComponent as Wave } from "../../images/wave.svg";


const Welcome = () => {
  return (
    <>
      <div className="padding section blue-bg" id="about">
        <h1 className="heading center">
          Welcome to Financial Programming with Ritvik!
        </h1>
        <p className="para">
          Financial Programming with Ritvik is about implementation of Python in
          Finance. Ritvik Dashora is the centerpiece of the brand. We upload videos on Trading bots, best Finance APIs, Algo
          trading strategies, and implementation of AI in Finance. We also talk
          about some upcoming Fintech trends/automation. We think the Financial
          Programming skill set will grow significantly in the future and we
          don’t want our followers to miss this boat. <br /><br />
          Ritvik Dashora has a Masters degree
          in Advanced Finance from IE Business School, Madrid, Spain. He has
          cleared all 3 levels of CFA and is a national Champion of Abacus.
        </p>
        <div className="stats">
          <div className="stat-each">
            <span className="counter">
              <CountUp end={250} preserveValue={true} duration={10} />K+
            </span>
            <p className="counter-text">
              views amassed over 100+ videos
            </p>
          </div>
          <div className="stat-each">
            <span className="counter">
              <CountUp end={9000} preserveValue={true} duration={10} />+
            </span>
            <p className="counter-text">
              subscribers as a tightly-knit family
            </p>
          </div>
          <div className="stat-each">
            <span className="counter">
              <CountUp end={500} preserveValue={true} duration={10} />+
            </span>
            <p className="counter-text">
              people helped on all platfomrs
            </p>
          </div>
          <div className="stat-each">
            <span className="counter">
              <CountUp end={5000} preserveValue={true} duration={10} />+
            </span>
            <p className="counter-text">
              followers on LinkedIn, finance professionals
            </p>
          </div>
        </div>
      </div>
      <Wave />
    </>
  );
}

export default Welcome
