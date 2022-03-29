import React from "react";
import HeaderContainer from "../components/molecules/HeaderContainer/HeaderContainer";
import SubscriptionContainer from "../components/molecules/SubscriptionContainer/SubscriptionContainer";
import YogaBenefitsContainer from "../components/molecules/YogaBenefitsContainer/YogaBenefitsContainer";
import YogaProgramContainer from "../components/molecules/YogaProgramContainer/YogaProgramContainer";
import SliderCardContainer from "../components/organisms/SliderCardContainer/SliderCardContainer";
import FrequentlyAskedQuestionContainer from "../components/molecules/FrequentlyAskedQuestionContainer/FrequentlyAskedQuestionContainer";
import Button from "../components/atoms/Button/Button";
import "./checkout-page.scss";

const CheckoutPage = () => {
  return (
    <div>
      <HeaderContainer />
      <div className="checkout__page">
        <SubscriptionContainer />
        <YogaProgramContainer />
        <SliderCardContainer />
        <Button />
        <YogaBenefitsContainer />
        <FrequentlyAskedQuestionContainer />
        <Button />
        <SubscriptionContainer />
      </div>
    </div>
  );
};

export default CheckoutPage;
