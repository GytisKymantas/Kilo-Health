import React from "react";
import "./yoga-program.scss";
import YogaPlan from "../../../assets/yogaplan.svg";

const YogaProgram = () => {
  return (
    <div className="yoga-program">
      <div className="yoga-program__icon-wrapper">
        <img className="yoga-icon" src={YogaPlan} alt="plan" />
      </div>
      <div className="yoga-program__text-wrapper">
        <h3 className="yoga-program__header">A personalized yoga program</h3>
        <p className="yoga-program__paragraph"> Completely safe and focused on your key goals</p>
      </div>
    </div>
  );
};

export default YogaProgram;
