import React from "react";
import "./yoga-program.scss";
import YogaPlan from "../../../assets/yogaplan.svg";

const YogaProgram = () => {
  return (
    <div className="yoga__program">
      <div>
        <img src={YogaPlan} alt="plan" />
      </div>
      <div>
        <h3>A personalized yoga program</h3>
        <p>Completely safe and focused on your key goals</p>
      </div>
    </div>
  );
};

export default YogaProgram;
