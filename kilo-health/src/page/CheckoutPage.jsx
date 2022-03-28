import React from "react";
import HeaderContainer from "../components/molecules/HeaderContainer/HeaderContainer";
import SubscriptionContainer from "../components/molecules/SubscriptionContainer/SubscriptionContainer";
import YogaProgramContainer from "../components/molecules/YogaProgramContainer/YogaProgramContainer";
import "./checkout-page.scss";

const CheckoutPage = () => {
  return (
    <div>
      <HeaderContainer />
      <div className="checkout__page">
        <SubscriptionContainer />
        <YogaProgramContainer />
      </div>
    </div>
  );
};

export default CheckoutPage;
