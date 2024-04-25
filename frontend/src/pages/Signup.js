import { useState } from 'react';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';
import { URL_SIGNUP } from '../urls/urls';
import axios from 'axios'



 export default function Signup() {

  const [user, setUser] = useState({})
  const navigate = useNavigate()

  //fonction qui recupère les valeurs du formulaire
  const handleChange = (event) => {
   
    //on recupere le nom  c'est la clé et la valeur de mon objet user
    const { name, value } = event.target
    setUser((user) => ({ ...user, [name]: value }))
    
  }

  const handelSubmit = async(event) => {
  event.preventDefault()
  console.log(user);
  try{
    const response = await axios.post(URL_SIGNUP, user)
    console.log(response);
    navigate("/sign")
  }catch(error){
    console.log(error);
  }
  }

  return (
    <div className='main-div'>
      <h2>Inscription</h2>
      <form className='login-form' onSubmit = {handelSubmit}>
        <input name="email" type="email" id="email" placeholder="email" required onChange={handleChange}/>
        <input name="password" type="password" id="password" placeholder="password" required onChange={handleChange} />
        <button type="submit">s'inscrire</button>
      </form>
    </div>
  )
}




