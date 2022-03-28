import React from "react";
import "./subscription-box.scss";

const SubscriptionBox = () => {
  return (
      <div className="subscription-box">
            <div className="subscription-box--header">
                <p>6 month plan</p>
                <div className="discount-wrapper">
                    <span className="discount-price">Save 50%</span>
                </div>
            </div>
            <div className="subscription-box--main">
                <p><span className="large-price">&#36;9.99</span>/month</p>
                <img src="#" alt="tickbox" />
            </div>
            <div className="subscription-box--footer">
               <p><s className="crossed-price">&#36;119.94</s><span className="highlighted-price">&#36;59.94</span> billed every 6 months</p>
            </div>
        </div>
  );
};

export default SubscriptionBox;