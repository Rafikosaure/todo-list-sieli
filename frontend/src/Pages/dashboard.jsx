import React, { useState } from 'react';
import axios from "axios";
import { URL } from '../Utils/URL';

function Dashboard() {

    // state task pour enregistrer les changements
    const [task,setTask] = useState({})


    const handleChange = (e) => {
        // récupération du nom et de la valeur de l'évènement
        const  { name, value} = e.target;
        // changement du state task
        name == "priority" ? setTask((task) => ({...task, [name]:Number(value)})) : setTask((task) => ({...task, [name]:value}));
        console.log(task); 
    }

    const handleSubmit = async (e) => {
        // empêche le rafraîchissement de la page
        e.preventDefault();

        // Envoi une requêtre en base de donées pour enregistrer la tâche
        try{
            console.log(login);
            const response = await axios.post(URL.ADD_TASK, task);
                console.log(response);
          }catch(e){
            console.log(e);
          }
    }

  return (
    <main className='app__dashboard'>
        <form onSubmit={handleSubmit} className='dashboard__form'>
            <div className='form__title'>
                <label htmlFor="title">titre</label>
                <input required onChange={handleChange} type="text" name='title'/>
            </div>
            <div className='form__content'>
                <label htmlFor="content">contenu</label>
                <textarea required onChange={handleChange} name="content" cols="30" rows="10"></textarea>
            </div>
            <div className="form__priority">
                <label htmlFor="number">priorité</label>
                <input required onChange={handleChange} type="number" name="priority" />
            </div>
            <button>Enregistrer</button>
        </form>
    </main>
  )
}

export default Dashboard;