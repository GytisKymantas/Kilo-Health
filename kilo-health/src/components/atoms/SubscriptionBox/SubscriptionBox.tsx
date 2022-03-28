import React, { useState } from "react";
import "./subscription-box.scss";
import TickBox from "../../../assets/tickbox.svg";
import TickBoxGray from "../../../assets/tickboxgray.svg";



const SubscriptionBox = () => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      onClick={() => setSelected(!selected)}
      className="subscription-box"
      style={
        selected
          ? { border: "2px solid #ff9b4e" }
          : { border: "2px solid rgba(0, 0, 0, 0.08)" }
      }
    >
      <div className="subscription-box--header">
        <p className="monthly-plan">6 month plan</p>
        <div className="discount-wrapper">
          <span className="discount-price">Save 50%</span>
        </div>
      </div>
      <div className="subscription-box--main">
        <div>
          <span className="large-price">&#x24;9.99</span>/month
        </div>
        <div className="tickbox">
          {selected ? (
            <img src={TickBox} alt="tickbox" />
          ) : (
            <img src={TickBoxGray} alt="tickbox" />
          )}
        </div>
      </div>
      <div className="subscription-box--footer">
        <p>
          <s className="crossed-price">&#36;119.94</s>
          <span className="highlighted-price">&#36;59.94</span> billed every 6
          months
        </p>
      </div>
    </div>
  );
};

export default SubscriptionBox;
