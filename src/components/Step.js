import React from "react";

function Step({date, distance, HandleEdit}) {
    return (
        <div className="step">
          <div className="step-date" >{date}</div>
          <div className="step-distance" >{distance}</div>
          <div className="step-edit">edit</div>
          <div className="step-delete">delete</div>
        </div>
    );
  }
  
  export default Step;