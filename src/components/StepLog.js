import React from "react";
import Step from "./Step";


function StepLog({steps, onHandleEdit, onHandleDelete}) {
  
    return (
      <div className="steps-сontainer">
        <div className="step-header">
          <div className="step-header-date" >Дата(дд.мм.гг)</div>
          <div className="step-header-distance" >Пройдено, км</div>
          <div className="step-header-actions" >Действия</div>
        </div>  
        <div className="step-el">
        {steps.sort((a, b) => b.time - a.time).map(step => (<Step key={step.id} id ={step.id} date={step.date} distance={step.distance} handleStepEdit={onHandleEdit} handleStepDelete={onHandleDelete}/>))}
        </div>
      </div>
    );
  }
  
  export default StepLog;