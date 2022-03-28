import React from "react";
import "./slider-bullets.scss";
import SliderBulletBlank from "../../../assets/blankbullet.svg";
import SliderBulletFull from "../../../assets/bullet.svg";



const SliderBullets = () => {
  return (
    <div className="bullet__container">
        <img src={SliderBulletFull} alt="full slider" />
        <img src={SliderBulletBlank} alt="full slider" />
        <img src={SliderBulletBlank} alt="full slider" />
        <img src={SliderBulletBlank} alt="full slider" />
    </div>
  );
};

export default SliderBullets;