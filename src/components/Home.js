import React from 'react'
import '../stylesheets/home.scss'
import Cards from './HomeComponents/Cards';
import ReactRotatingText from "react-rotating-text"
import Welcome from './HomeComponents/Welcome';
import Vision from './HomeComponents/Vision';
import Contact from './HomeComponents/Contact';


const Home = () => {

  return (
    <>
      <div className="home">
        <section className="hero">
          <div className="hero-text-box">
            <h1 className="hero-text">
              Financial Programming <br />
              made{" "}
              <span className="fashion">
                <ReactRotatingText items={["fun", "simple", "profitable"]} />
              </span>
            </h1>
            <form action="https://www.youtube.com/c/FinancialProgrammingwithRitvik/about" target='_blank'>
              <button className="hero-button" type="submit">
                LEARN MORE <i className="fas fa-arrow-circle-right"></i>
              </button>
            </form>
          </div>
        </section>
        <div className="hero-img-box">
          <img
            className="ritvik circle-ripple"
            src={require("../images/ritvik.png")}
            alt="Ritvik"
          />
        </div>
        <Vision />
        <Welcome />
        <Cards />
        <Contact />
      </div>
    </>
  );
}

export default Home