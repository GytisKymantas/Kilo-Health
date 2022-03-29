import React from "react";
import "./frequently-asked-question-container.scss";
import FrequentlyAskedQuestion from "../../atoms/FrequentlyAskedQuestion/FrequentlyAskedQuestion";

const FrequentlyAskedQuestionContainer = () => {
  return (
    <div className="FAQ">
        <h2 className="FAQ__header">Frequently Asked Questions</h2>
      <FrequentlyAskedQuestion />
      <FrequentlyAskedQuestion />
      <FrequentlyAskedQuestion />
      <FrequentlyAskedQuestion />
      <FrequentlyAskedQuestion />
    </div>
  );
};

export default FrequentlyAskedQuestionContainer;
