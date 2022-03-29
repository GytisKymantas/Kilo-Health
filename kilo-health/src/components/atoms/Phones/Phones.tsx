import React from "react";
import "./phones.scss";
import DoublePhone from "../../../assets/doublephone.svg";




const Phones = () => {
  return (
    <div className="phones__container">
        <img src={DoublePhone} alt="phones" />
    </div>
  );
};

export default Phones;