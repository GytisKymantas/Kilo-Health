import React, { useState } from "react";
import "./frequently-asked-question.scss";
import ArrowUp from "../../../assets/arrowup.svg";
import ArrowDown from "../../../assets/arrowdown.svg";

interface IFrequentlyAskedQuestion {
  question: string;
  answer: string;
}

const FrequentlyAskedQuestion: React.FC<IFrequentlyAskedQuestion> = ({
  question,
  answer,
}) => {
  const [clicked, setClicked] = useState(false);

//   const str = (answer.replace(/Positive Yoga/g, "<b>PositiveYoga</b>"));
// console.log(str,"str");
  return (
    <div className="frequently-asked-question__container">
      <div className="question">
        <h4>{question}</h4>
        {clicked ? (
          <img
            onClick={() => setClicked(!clicked)}
            src={ArrowUp}
            alt="arrowup"
            style={{ cursor: "pointer" }}
          />
        ) : (
          <img
            onClick={() => setClicked(!clicked)}
            src={ArrowDown}
            alt="arrowup"
            style={{ cursor: "pointer" }}
          />
        )}
      </div>
      {!clicked && <p>{answer}</p>}
    </div>
  );
};

export default FrequentlyAskedQuestion;
