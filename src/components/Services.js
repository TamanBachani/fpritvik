import React from 'react'
import { ReactComponent as Freelance } from "../images/freelance.svg";
import { ReactComponent as Tutorials } from "../images/tutorials.svg";
import '../stylesheets/services.scss'


const Services = () => {
  return (
    <section className="padding support">
      <h1 className="heading">Services we offer</h1>
      <main className="flex-outer">
        <div className="service-stack flex-inner left">
          <div className="service-image">
            <Freelance />
          </div>
          <div className="service-para">
            <h2 className="service-heading">Freelance</h2>
            <p className="service-text">
              We provide freelance services to help you bring your project ideas
              to life. We've worked with crypto giants in the space, ByBit,
              Binance, and others.
              <br />
              <br />
              We provide services for Trading Bots, Quantitative Finance,
              Portfolio Management, and Analyses of Trading Strategies.
              <br />
              <br />
              If you'd like to join my Freelancer Team, kindly send me a message
              on Linkedin for the same.
            </p>
            <div className="leggo">
              <a href="https://www.linkedin.com/in/ritvikdashora/">
                TAKE ME THERE <i className="fas fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="service-stack flex-inner right">
          <div className="service-image">
            <Tutorials />
          </div>
          <div className="service-para">
            <h2 className="service-heading">Tutorials</h2>
            <p className="service-text">
              We cover tutorials for topics that confound people in the world of
              FinTech. These topics range from API implementation tutorials, to
              price prediction for crypto, to Trading Bots along the same lines.{" "}
              <br /> <br />
              Would you like for us to create coding tutorials for topics that
              concern you? Or Strategies that you aren't aware of? If yes,
              please continue your unbridled support and share your ideas on the
              Email ID provided in the Contact Us section.
            </p>
            <div className="leggo">
              <a href="/">
                TAKE ME THERE <i className="fas fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Services