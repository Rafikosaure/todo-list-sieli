import React, { useEffect, useState } from 'react';
import axios from "axios";
import { URL } from '../Utils/URL';
import { Card } from '../Components/card';
import { AddSvg } from '../Components/logo/logo';
import { DeleteSvg as CloseSvg } from '../Components/logo/logo';
import "./style.scss";

function Dashboard() {


    // stores the changes when creating a new task
    const [task,setTask] = useState({})
    // stores the data for all the tasks
    const [tasksList, setTasksList] = useState([])
    const [tasksToDo, setTasksToDo] = useState();
    const [tasksDone, setTasksDone] = useState();
    // whole page but the form state
    const [dimPage, setDimPage] = useState(false);
    // form display state
    const [formVisibility, setFormVisibility] = useState(false);
    const [defaultDoneValue, setDefaultDoneValue] = useState(false);

    // executed on first load
    useEffect(() => {
      fetchTasks();
    },[])

    // executed whenever tasksList is updated
    useEffect(() => {
      setTasksToDo();
      setTasksDone();
      displayTasks();
    },[tasksList])

    const handleChange = (e) => {
        // gets the event name and value
        const  { name, value} = e.target;
        // updates the task state
        switch (name) {
          case "priority":
            // converts to number, might be useless though
            setTask((task) => ({...task, [name]: Number(value)}))
            break;
          case "done":
            // checked property for true or false, not the actual value
            const { checked } = e.target;
            // abomination
            defaultDoneValue ? setDefaultDoneValue(false) : setDefaultDoneValue(true)
            setTask((task) => ({...task, [name]: checked}))
            break;
          case "expiration":
            // creates a date object to later compare it
            const targetDate= new Date(value)
            // first converts the targtet date to seconds (standard format)
            // only updates if target date is greater than current date (no task in the past in short)
            targetDate.getTime() > Date.now() && setTask((task) => ({...task, [name]: value}));
            break;
          default:
            setTask((task) => ({...task, [name]: value}))
            break;
        }
        console.log(task); 
    }

    const handleSubmit = async (e) => {
        // prevents page refresh
        e.preventDefault();
        // sends a request to the database to store a task
        switchDisplayState(e)
        try{
            const response = await axios.post(URL.ADD_TASK, task);
            console.log(response);
          }catch(err){
            console.log(err);
          }
    }

    const fetchTasks = async () => {
        // fetches all the task in the database
        try{
            // const response = await axios.get(URL.GET_TASKS);
            // updates tasksList state
            // setTasksList(response.data);
            setTasksList(dummyData);
        }catch(e){
            console.log(e);
        }
    }

    const displayTasks = () => {
        // might need to parse
        // sort the array in descending order depending on the priority (higher first)
        tasksList.sort((a, b) => b.priority - a.priority);
        // creates the html to display the tasks
        tasksList.map(task => {
            const { id, title, content, priority, createdAt, category, done, expiration } = task;
            const card = <Card
                            title={title} 
                            // onClick={() => deleteTask(id)}
                            key={id} 
                            content={content} 
                            isDone={done} 
                            priority={priority}
                            delete={() => deleteTask(id)}
                            // YYYY-MM-DDTHH:mm:ssZ --> YYYY/MM/DD à HH:mm :)
                            expiration={`${expiration.split('T')[0].replaceAll("-","/")} à ${expiration.split('T')[1].slice(0, -4)}`}
                           />
            done ? setTasksDone(tasksDone => [tasksDone, card]) : setTasksToDo(tasksToDo => [tasksToDo, card]);
        })
    }

    const deleteTask = async (id) => {
      try{
        // sends request to delete
          const response = await axios.delete(URL.DELETE_TASK.replace("id", id));
          // updates tasksList state
          console.log(response);
          fetchTasks();
      }catch(e){
          console.log(e);
      }
    }

    const handleUpdate = (e) => {
      // gets the event name and value
      const  { key, value, defaultValue} = e.target;
      console.log(value);
    }

    const updateTask = async (e, id) => {
      try{
        // sends request to delete

        // {
        //   "title": "string",
        //   "content": "string",
        //   "priority": 0,
        //   "category": 0,
        //   "done": true,
        //   "expiration": "2024-04-26T01:28:34.946Z"
        // }

          const response = await axios.put(URL.update_TASK.replace("id", id), /*actualcontentxd*/);
          // updates tasksList state
          console.log(response);
          // ??
          fetchTasks();
      }catch(e){
          console.log(e);
      }
    }

    const switchDisplayState = (e=null) => {
      // when adding a task, this will specify whether the "Fait" checkbox should be checked by default
      e.target.name && (e.target.name == "taskDone" ? setDefaultDoneValue(true) : setDefaultDoneValue(false));
      // switches the display of both the page and the add_task form
      formVisibility ? setFormVisibility(false) : setFormVisibility(true);
      dimPage ? setDimPage(false) : setDimPage(true);
    }

  return (
    <main className={`app__dashboard ${dimPage ? "dim" : false}`}>
      {/* form is hidden by defalue */}
        <form onSubmit={handleSubmit} className={`dashboard__form ${formVisibility ? false : "hidden"}`}>
          <button type='button' className='form__close' onClick={switchDisplayState}><CloseSvg classname="form__close__logo" /></button>
            <div className='form__title form__element'>
                <label className='element__label' htmlFor="title">titre</label> 
                <input required onChange={handleChange} type="text" name='title'/>
            </div>
            <div className='form__content form__element'>
                <label className='element__label' htmlFor="content">contenu</label>
                <textarea className='content__textarea' required onChange={handleChange} name="content"></textarea>
            </div>
            <div className="form__optional">
              <div className="optional__priority optional__element">
                <label className='optional__label' htmlFor="number">priorité</label>
                <input required onChange={handleChange} type="number" name="priority" />
              </div>
              <div className="optional__done optional__element">
                <label className='optional__label' htmlFor="done">fait</label>
                <input onChange={handleChange} type="checkbox" checked={defaultDoneValue} name="done" />
              </div>
              <div className="optional__expiration optional__element">
                <label className='optional__label' htmlFor="expiration">pour le</label>
                <input onChange={handleChange}  type='datetime-local' name="expiration" />
              </div>
            </div>
            <button className='form__button' type='submit'>Enregistrer</button>
        </form>
        <section className="dashboard__tasks">
           <div className="tasks__to_do">
            <h2 className='to_do__title'>À faire</h2>
            <button onClick={switchDisplayState} className='to_do__add' name='TaskToDo'><AddSvg classname="to_do__logo" /></button>
            <div className="to_do__taskslist">
              {tasksToDo}
            </div>
           </div>
           <div className="tasks__done">
            <h2 className='done__title'>Fait</h2>
            <button onClick={switchDisplayState} className='done__add' name='taskDone'><AddSvg classname="done__logo" /></button>
            <div className="done__taskslist">
              {tasksDone}
            </div>
           </div>
        </section>
    </main>
  )
}

export default Dashboard;