import React, { useState } from 'react'

function Dashboard() {

    // state task pour enregistrer les changements
    const [task,setTask] = useState({})


    const handleChange = (e) => {
        // récupération du nom et de la valeur de l'évènement
        const  { name, value} = e.target;
        // changement du state task
        setTask((task) => ({...task, [name]:value}));
        console.log(task); 
    }

  return (
    <main className='app__dashboard'>
        <form className='dashboard__form'>
            <div className='form__title'>
                <label htmlFor="title">Titre</label>
                <input onChange={handleChange} type="text" name='title'/>
            </div>
            <div className='form__content'>
                <label htmlFor="content">Contenu</label>
                <textarea onChange={handleChange} name="content" cols="30" rows="10"></textarea>
            </div>
            <button>Enregistrer</button>
        </form>
    </main>
  )
}

export default Dashboard;