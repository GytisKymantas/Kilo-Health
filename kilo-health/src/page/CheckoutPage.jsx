import React from "react";
import HeaderContainer from "../components/molecules/HeaderContainer/HeaderContainer";
import SubscriptionContainer from "../components/molecules/SubscriptionContainer/SubscriptionContainer";
import YogaBenefitsContainer from "../components/molecules/YogaBenefitsContainer/YogaBenefitsContainer";
import YogaProgramContainer from "../components/molecules/YogaProgramContainer/YogaProgramContainer";
import SliderCardContainer from "../components/organisms/SliderCardContainer/SliderCardContainer";
import FrequentlyAskedQuestionContainer from "../components/molecules/FrequentlyAskedQuestionContainer/FrequentlyAskedQuestionContainer";
import PhonesContainer from "../components/molecules/PhonesContainer/PhonesContainer";
import Button from "../components/atoms/Button/Button";
import "./checkout-page.scss";

const CheckoutPage = () => {
  return (
    <div>
      <HeaderContainer />
      <div className="checkout__page">
        <SubscriptionContainer displayTitle={true} />
        <YogaProgramContainer />
        <SliderCardContainer />
        <Button displayButton={true} />
        <YogaBenefitsContainer />
        <PhonesContainer />
        <FrequentlyAskedQuestionContainer />
        <Button displayButton={true} />
        <SubscriptionContainer />
        <YogaProgramContainer />
      </div>
    </div>
  );
};

export default CheckoutPage;
