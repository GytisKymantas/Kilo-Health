import React, { useState } from "react";
import "./frequently-asked-question.scss";
import ArrowUp from "../../../assets/arrowup.svg";
import ArrowDown from "../../../assets/arrowdown.svg";

const FrequentlyAskedQuestion = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="frequently-asked-question__container">
      <div className="question">
        <h4>What happens after I order?</h4>
        {clicked ? (
          <img onClick={()=>setClicked(!clicked)} src={ArrowUp} alt="arrowup" />
        ) : (
          <img onClick={()=>setClicked(!clicked)} src={ArrowDown} alt="arrowup" />
        )}
      </div>
      <p>
        After you place your order, we get to work! Based on the questions you
        answered in the quiz, we'll craft your personal plan to your level with
        recommendations on how to improve.
      </p>
    </div>
  );
};

export default FrequentlyAskedQuestion;
