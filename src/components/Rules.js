import React from "react";

//import "./Rules.css";

export default function Rules(props) {
 
  return (
    <div className={"col-4  d-flex justify-content-center"}>
      <button type="button" className="btn lowerButton" onClick={"showRules"}>
        <i className={"fa fa-file-text mr-1"} aria-hidden="true"></i>
        RULES
      </button>
    </div>
  );

function showRules(event){
  return (
  <div className="rulesImageContainer hv-center">
      <img
        src="images/Rules.png"
        className="rulesImage"
        alt="Rules Image"
      />
    </div>);
}
}
