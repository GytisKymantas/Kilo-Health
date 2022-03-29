import React from "react";
import PriceTag from "../../../assets/pricetag.svg";
import "./discount-header.scss";

const DiscountHeader = () => {
  return (
    <div className="discount__container header">
      {/* <div className="image__wrapepr"> */}
        <img className="discount__container--image" src={PriceTag} alt="pricetag" />
      {/* </div> */}
      <p className="discount"><strong>50%</strong> discount only valid for <strong>00:24:00</strong> </p>
    </div>
  );
};
export default DiscountHeader;
