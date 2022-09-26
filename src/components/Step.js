import React from "react";

function Step({date, distance, handleStepEdit, id, handleStepDelete}) {
    return (
        <div className="step"id={id}>
          <div className="step-date" >{date}</div>
          <div className="step-distance" >{distance}</div>
          <div className="step-edit" onClick={handleStepEdit}>✎</div>
          <div className="step-delete" onClick={handleStepDelete}>✘</div>
        </div>
    );
  }
  
  export default Step;