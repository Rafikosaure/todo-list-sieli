import React from 'react'

function Dashboard() {
  return (
    <main className='app__dashboard'>
        <form className='dashboard__form'>
            <div className='form__title'>
                <label htmlFor="title">Titre</label>
                <input type="text" name='title'/>
            </div>
            <div className='form__content'>
                <label htmlFor="content">Contenu</label>
                <textarea name="content" cols="30" rows="10"></textarea>
            </div>
            <button>Enregistrer</button>
        </form>
    </main>
  )
}

export default Dashboard;