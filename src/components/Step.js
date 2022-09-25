import React from "react";

function Step({date, distance, handleStepEdit, id, handleStepDelete}) {
  console.log(new Date(date).getTime())
    return (
        <div className="step"id={id}>
          <div className="step-date" >{date}</div>
          <div className="step-distance" >{distance}</div>
          <div className="step-edit" onClick={handleStepEdit}>edit</div>
          <div className="step-delete" onClick={handleStepDelete}>delete</div>
        </div>
    );
  }
  
  export default Step;