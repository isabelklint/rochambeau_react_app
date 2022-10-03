import React from "react";
import "./Header.css";

export default function Header(props) {
  const renderChoice = () => {
    let choice = ["ROCK", "PAPER", "SCISSORS", "LIZARD", "SPOCK"];
   
    return (
      <div className="theme">
        {choice.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
    );
  };
  return (
    <div className="headerChoice">
    <div className="row d-flex justify-content-center">
      <div className="header col-10 col-lg-6 mt-5">
        <div className="row h-100 d-flex align-items-center px-2">
          <div className="col-8 col-lg-10 d-flex flex-column ">
            {renderChoice()}
          </div>
          <div className="col-4 col-lg-2 score-container">
            <div className="score-text">SCORE</div>
            <div className="score-value">{props.userScore}</div>
          </div>
        </div>
      </div>
      </div>
    </div>
    
  );
}
;