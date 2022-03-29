import React from "react";
import PriceTag from "../../../assets/pricetag.svg";
import  "./discount-header.scss";

const DiscountHeader = () => {
    return(
        <div className="discount__container header">
            <div>
            <img src={PriceTag} alt="pricetag" />

            </div>
            <p>50% discount only valid for 00:24:00 </p>
        </div>
    );
};
export default DiscountHeader;