import React from "react";
import PriceTag from "../../../assets/pricetag.svg";
import  "./discount-header.scss";

const DiscountHeader = () => {
    return(
        <div className="discount__container header">
            <img src={PriceTag} alt="pricetag" />
            <p>50% discount only valid for 24:00 </p>
        </div>
    );
};
export default DiscountHeader;