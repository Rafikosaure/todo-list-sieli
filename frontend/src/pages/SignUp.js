import '../styles/Login.css'
import { useState } from 'react'
import axios from 'axios'
import { URL_SIGNUP } from '../urls/urls'

export default function SignUp() {

  const [ user, setUser ] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    setUser((user) => ({ ...user, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(user)
    try {
      const response = await axios.post(URL_SIGNUP, user)
      console.log(response)
    } catch(error) {
      console.log(error)
    }
  }


  return (
    <div className='main-div'>
        <h2>Inscription</h2>
      <form className='login-form' onSubmit={handleSubmit}>
          <input type="email" id="email" name='email' placeholder='email' required onChange={handleChange} />
          <input type="password" id="password" name='password' placeholder='mot de passe' required onChange={handleChange} />
          <button type='submit'>S'inscrire</button>
        </form>
    </div>
  )
}
