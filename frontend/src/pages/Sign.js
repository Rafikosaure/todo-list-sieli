import '../App.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, selectUser } from '../redux/slices/UserSlice'


export default function Sign() {

  const [ user, setUser ] = useState({})
  const currentUser = useSelector(selectUser)
  const dispatch = useDispatch()

  const handleChange = (event) => {
      const { name, value } = event.target
      setUser((user) => ({ ...user, [name]: value }))
  }

  const handleSubmit = (event) => {
      event.preventDefault()
      dispatch(addUser(user))
  }

  return (
    <div className='main-div'>
        <h2>Connexion</h2>
      <form className='login-form' onSubmit={handleSubmit}>
        <input type="email" id="email" name='email' placeholder='email' required onChange={handleChange} />
        <input type="password" id="password" name='password' placeholder='mot de passe' required onChange={handleChange} />
        <button type='submit'>Se connecter</button>
      </form>
    </div>
  )
}
