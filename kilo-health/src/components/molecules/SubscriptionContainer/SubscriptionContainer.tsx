import React from "react";
import SubscriptionBox from "../../atoms/SubscriptionBox/SubscriptionBox";
import Button from "../../atoms/Button/Button";
import SafetyGuarantee from "../../../assets/safetyguarantee.svg";

import "./subscription-container.scss";

const SubscriptionContainer = () => {
  return (
    <div>
        <span>Over <strong>52 147</strong> plans ordered</span>
        <h1 className="hero__header">Get access to your yoga program now!</h1>
        <p className="hero__paragraph">Choose your plan and get <span className="hero__trial">7 days free trial</span></p>
        <SubscriptionBox />
        <Button />
        <p className="security__paragraph">After 7 days free trial subscription payment is automatically charged from your account unless it is cancelled
            at least 24 hours before the end of the trial period.
        </p>
        <p className="security__paragraph">By choosing a payment method you agree to the <a href="#">T&#38;Cs</a> and <a href="#">Privacy Policy</a></p>
        <img src={SafetyGuarantee} alt="securityguarantee" />
    </div>
  );
};

export default SubscriptionContainer;