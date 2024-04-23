import { useState } from 'react';
import '../App.css';


 export default function Signup() {

  const [user, setUser] = useState({})

  //fonction qui recupère les valeurs du formulaire
  const handleChange = (event) => {
    //on recupere le nom  c'est la clé et la valeur de mon objet user
    const { name, value } = event.target
    setUser((user) => ({ ...user, [name]: value }))
  }

  const handelSubmit = (event) => {
    event.preventDefault()
    console.log(user)
  }

  return (
    <div className='main-div'>
      <h2>Inscription</h2>
      <form className='login-form' onSublit = {handelSubmit}>
        <input type="email" id="email" placeholder="email" required onChange={handleChange}/>
        <input type="password" id="password" placeholder="password" required onChange={handleChange} />
        <button type="submit">s'inscrire</button>
      </form>
    </div>
  )
}


