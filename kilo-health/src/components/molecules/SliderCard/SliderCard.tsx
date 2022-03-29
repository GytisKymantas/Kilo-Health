import React from "react";
import YellowStar from "../../../assets/yellowstar.svg";
import { YellowStarData } from "../../../data";
import "./slider-card.scss";

const stars = YellowStarData;

interface ISliderCard {
name:string,
address:string,
image:string,
text:string,
index?:number
}

const SliderCard:React.FC<ISliderCard> = ({name,address,image,text,index}) => {
  return (
    <div className="slider__card">
        <span className="slider__card--title">{name}</span>
        <address className="slider__card--address">{address}</address>
        <div className="stars">
          {stars.map((star)=> {
            return (
              <img key={star} src={YellowStar} alt="yellowstar"/>  
            );
          })}            
        </div>
        <img src={image} alt="ladyinblue" />
        <p className="slider__card--paragraph">{text}
        </p>
    </div>
  );
};

export default SliderCard;