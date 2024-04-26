import '../styles/Login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../redux/slices/UserSlice'
import axios from 'axios'
import { URL_SIGN } from '../urls/urls'
import { Link } from 'react-router-dom'


export default function Sign() {

  const [ user, setUser ] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target
    setUser((user) => ({ ...user, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    dispatch(addUser(user))
    try {
      const response = await axios.post(URL_SIGN, user)
      console.log(response)
      const token = response.data.token
      localStorage.setItem("token", token)
      navigate("/")
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div className='main-div'>
        <h2>Connexion</h2>
      <form className='login-form' onSubmit={handleSubmit}>
        <input type="email" id="email" name='email' placeholder='email' required onChange={handleChange} />
        <input type="password" id="password" name='password' placeholder='mot de passe' required onChange={handleChange} />
        <button type='submit'>Se connecter</button>
      </form>
      <div className='to-signup'>Vous n'êtes pas encore inscrit ? cliquez <Link to={"/signup"}>ici</Link> !</div>
    </div>
  )
}
