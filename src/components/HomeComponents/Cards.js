import React from "react";
import "../../stylesheets/cards.scss";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "../../stylesheets/cards.scss";

// images
// import Interview from "../../images/interview_thumbnail.jpg";
// import Api from "../../images/api_thumbnail.jpg";
// import Strategy from "../../images/strategy_thumbnail.jpg";
// import Bots from "../../images/bots_thumbnail.jpg";

const Cards = () => {
  return (
    <div className="padding section card-section">
      <h1 className="heading center">
        An Assortment of Topics Curated for the financially curious
      </h1>
      <AwesomeSlider bullets={false} className="slide">
        <div className="single_card">
          <div className="grid">
            <div className="card_text_container">
              <h1 className="topics">Interviews in FinTech</h1>
              <p className="card-info">
                with WealthTech leaders like Vaibhav Porwal from Dezerv.
              </p>
            </div>
          </div>
          <div className="img_container_int .img_container">
            <div className="image-one"></div>
          </div>
        </div>
        <div className="single_card">
          <div className="grid">
            <div className="card_text_container">
              <h1 className="topics">Trading Strategies</h1>
              <p className="card-info">
                risk-friendly, to risk-averse, all portfolio personalities explored
              </p>
            </div>
            <div className="img_container">
              <div className="image two"></div>
            </div>
          </div>
        </div>
        <div className="single_card">
          <div className="grid">
            <div className="card_text_container">
              <h1 className="topics">APIs for Financial Data</h1>
              <p className="card-info">
                data API's like tNEWS API, to Arima for Crypto price prediction
              </p>
            </div>
            <div className="img_container">
              <div className="image three"></div>
            </div>
          </div>
        </div>
        <div className="single_card">
          <div className="grid">
            <div className="card_text_container">
              <h1 className="topics">Trading Bots</h1>
              <p className="card-info">
                backtesting, deployment, accuracy, everything taught step-wise
              </p>
            </div>
            <div className="img_container">
              <div className="image four"></div>
            </div>
          </div>
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Cards;
