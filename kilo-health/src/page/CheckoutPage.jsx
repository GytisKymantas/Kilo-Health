import React from "react";
import HeaderContainer from "../components/molecules/HeaderContainer/HeaderContainer";
import SubscriptionContainer from "../components/molecules/SubscriptionContainer/SubscriptionContainer";
import "./checkout-page.scss";

const CheckoutPage = () => {
  return (
    <div>
      <HeaderContainer />
      <div className="checkout__page">
        <SubscriptionContainer />
      </div>
    </div>
  );
};

export default CheckoutPage;
