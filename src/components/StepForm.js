import React from "react";

function StepForm({form, onHandleChange, onHandleSubmit}) {
    return (
      <form className="form" onSubmit={onHandleSubmit}>
        <div className="form-date-container">
          <label className="form-label-date" htmlFor="form-date">Дата(дд.мм.гг)</label>
          <input type="date" id="form-date" name="date"  value={form.date} onChange={onHandleChange}></input>
        </div>
        <div className="form-distance-container">
          <label className="form-label-distance" htmlFor="form-distance">Пройдено, км</label>
          <input type="number" id="form-distance" name="distance" value={form.distance} onChange={onHandleChange}></input>
        </div>
        <button id="form-ok" >OK</button>
      </form>
    );
  }
  
  export default StepForm;