import { useState } from 'react'
import '../App.css'

export default function SignUp() {

    const [ user, setUser ] = useState({})

    const handleChange = (event) => {
        const { name, value } = event.target
        console.log({ name, value })
        setUser((user) => ({ ...user, [name]: value }))
        console.log(user)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target)
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
