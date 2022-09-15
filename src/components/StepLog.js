import React from "react";
import Step from "./Step";


function StepLog({steps, onHandleEdit}) {
 console.log(steps)
 let stepsDraw = '';

 if(steps.length) {
   stepsDraw = steps.map((step) => <Step step={step}  key={step.id} HandleEdit={onHandleEdit}></Step>);
 }

 console.log(stepsDraw)

 const array = [
  {id: 2, }
 ]
    return (
      <div className="steps-сontainer">
        <div className="step-header">
          <div className="step-date" >Дата(дд.мм.гг)</div>
          <div className="step-date" >Пройдено</div>
          <div className="step-date" >Действия</div>
        </div>  
        <div className="step-el">
        {stepsDraw}
        </div>
      </div>
    );
  }
  
  export default StepLog;