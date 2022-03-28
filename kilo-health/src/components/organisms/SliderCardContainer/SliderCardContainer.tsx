import React from "react";
import SliderCard from "../../molecules/SliderCard/SliderCard";
import "./slider-card-container.scss";
import SliderBullets from "../../atoms/SliderBullets/SliderBullets";

const SliderCardContainer = () => {
  return (
    <div className="slider">
        <h2 className="slider__header">Hear success stories from our clients</h2>
        <SliderCard />
        <SliderBullets />
    </div>
  );
};

export default SliderCardContainer;