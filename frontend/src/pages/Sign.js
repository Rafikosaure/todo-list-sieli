import '../styles/Login.css';
import { useDispatch , useSelector} from 'react-redux'
import { addUser, selectUser } from '../redux/slice/UserSlice'
import { useState } from 'react';
import axios from 'axios';
import { URL_SIGN } from '../urls/urls';
import { Link } from 'react-router-dom';
import  {useNavigate} from 'react-router-dom'



export default function Sign() {

  const [user, setUser] = useState({})
  const currentUser = useSelector(selectUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()

 
 

  const handleChange = (event) => {

  const { name, value } = event.target
  setUser((user) => ({ ...user, [name]: value }))

  }

const handelSubmit = async (event) => {
event.preventDefault()

dispatch(addUser(user))
try{
  const response = await axios.post(URL_SIGN, user)
  console.log(response);

  const token = response.data.token
  localStorage.setItem('token', token)
  navigate("/")
}catch(error){
  console.log(error);
}

 
}
//console.log(currentUser);

return (
  <div className='main-div'>
    <h2>Connexion</h2>
    <form className='login-form' onSubmit = {handelSubmit}>
      <input name="email" type="email" id="email" placeholder="email" required onChange={handleChange}/>
      <input name="password" type="password" id="password" placeholder="password" required onChange={handleChange} />
      <button type="submit">Se connecter</button>
    </form>
    <div className='to-signup'>Vous n'etes pas encore inscrit ? Cliquez sur <Link to={"/signup"}>ici</Link></div>
  </div>
)
}


