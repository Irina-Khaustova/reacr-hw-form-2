import { useState } from 'react';
import './App.css';
import StepForm from './components/StepForm';
import StepLog from './components/StepLog';
import StepModel from './components/stepModel';

function App() {
  const [steps, setSteps] = useState([]);
  const [form, setForm] = useState({
    date: '',
    distance: ''
  })
  const handleChange = (evt) => {
    console.log(evt)
    //evt.preventDefault();
    const name = evt.target.name;
    const value = evt.target.value;
    setForm((prevForm) => ({...prevForm, [name]: value}));
    console.log(10, form);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const delElement = steps.filter(el => el.id === form.id);
    let flag =1;
    console.log(steps.indexOf(delElement[0]))
    if(delElement.length > 0) {
       steps.splice(steps.indexOf(delElement[0]),1)
       flag = 1;
    }
    if(form.date || form.distance){
    const step = new StepModel(form.date, form.distance)
    steps.forEach(el => {
      if(form.date === el.date) {
        el.distance = Number(el.distance) + Number(form.distance);
        flag = 0;
      }
    })
    
    setForm(({
      date: '',
      distance: ''
    }))
    console.log(steps)
    if(flag) {
   setSteps(prevSteps => [
    ...prevSteps, step
   ])
  }
  }  
  } 

  const handleEdit = (evt) => {
    const prov = steps.filter(el =>  evt.target.parentNode.id === el.id)
    console.log('элемент события', evt.target.parentNode.id, prov[0].date);
    setForm(prevForm => ({...prevForm, date: prov[0].date}))
    setForm(prevForm => ({...prevForm, distance: prov[0].distance}))
    setForm(prevForm => ({...prevForm, id: prov[0].id}))
    
  }

  const handleDelete = (evt) => {
    const delElement = steps.filter(el => el.id === evt.target.parentNode.id);
    console.log(delElement, steps.indexOf(delElement[0]))
    if(delElement.length > 0) {
       steps.splice(steps.indexOf(delElement[0]),1)
    }
    setSteps(prevForm => [...prevForm])
  }

  return (
    <div className='container'>
      <StepForm className="Step-form" form ={form} onHandleChange={handleChange} onHandleSubmit={handleSubmit} ></StepForm>
      <StepLog className="step-log"  form={form} steps={steps} onHandleEdit={handleEdit} onHandleDelete={handleDelete}></StepLog>
    </div>
  );
}

export default App;
