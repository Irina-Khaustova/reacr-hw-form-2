import { useState } from 'react';
import './App.css';
import StepForm from './components/StepForm';
import StepLog from './components/StepLog';
import StepModel from './components/stepModel';

function App() {
  const [steps, setSteps] = useState([]);
  const [form, setForm] = useState({
    date: '',
    meaning: ''
  })
  const handleChange = (evt) => {
    console.log(evt)
    //evt.preventDefault();
    const name = evt.target.name;
    const value = evt.target.value;
    setForm((prevForm) => ({...prevForm, [name]: value}));
    //console.log(10);
  }

  const handleSubmit = ( date, distance) => {
    //evt.preventDefault();
    const step = new StepModel(date, distance)
    setForm(({
      date: '',
      meaning: ''
    })) 
    console.log(step)
    setSteps(prevSteps => [
    ...prevSteps, step
      //console.log("handleSubmit")
    ])
    setForm(({
      date: '',
      meaning: ''
    })) 
  }

  const handleEdit = () => {
    console.log("редактировать");
  }
 
  console.log(steps)
  //console.log(steps)
  return (
    <div className='container'>
      <StepForm className="Step-form" form ={form} onHandleChange={handleChange} onHandleSubmit={handleSubmit}></StepForm>
      <StepLog className="step-log"  form={form} steps={steps} onHandleEdit={handleEdit}></StepLog>
    </div>
  );
}

export default App;
