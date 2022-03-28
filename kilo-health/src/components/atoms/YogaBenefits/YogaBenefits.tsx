import React from "react";
import "./yoga-benefits.scss";
import GreenTick from "../../../assets/greentick.svg";


const YogaBenefits = () => {
  return (
    <div className="yoga__benefits">
        <img src={GreenTick} alt="greentick" />
        <p>
            Each program adapts to your age or fitness level
        </p>
    </div>
  );
};

export default YogaBenefits;