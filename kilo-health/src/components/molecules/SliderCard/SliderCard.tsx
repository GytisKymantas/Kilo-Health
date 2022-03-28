import React from "react";
import YellowStar from "../../../assets/yellowstar.svg";
import LadyInBlue from "../../../assets/ladyinblue.svg";
import "./slider-card.scss";


const SliderCard = () => {
  return (
    <div className="slider__card">
        <span className="slider__card--title">Emily, 28</span>
        <address className="slider__card--address">Delaware, NJ</address>
        <div className="stars">
            <img src={YellowStar} alt="yellowstar"/>      
            <img src={YellowStar} alt="yellowstar"/>
            <img src={YellowStar} alt="yellowstar"/>      
            <img src={YellowStar} alt="yellowstar"/>
            <img src={YellowStar} alt="yellowstar"/>
        </div>
        <img src={LadyInBlue} alt="ladyinblue" />
        <p className="slider__card--paragraph">I have been using this program for 3 months now
            and it helped me to lose 16lbs, taught me how to brethe
            properly and now I look forward to my workout. Great
            challenges for different problem zones. Definitely 
            recommend to anyone that wants to lose weight and feel better 
            without long hour at the gym or exhausting workouts.
        </p>
    </div>
  );
};

export default SliderCard;