import React from "react";
import "./phones.scss";
import PhoneLeft from "../../../assets/phoneleft.svg";
import PhoneRight from "../../../assets/phoneright.svg";



const Phones = () => {
  return (
    <div className="phones__container">
        <img src={PhoneLeft} alt="leftPhone" />
        <img src={PhoneRight} alt="RightPhone" />
    </div>
  );
};

export default Phones;