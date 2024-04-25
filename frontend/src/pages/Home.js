import { useEffect, useState } from 'react'
import '../styles/Home.css'
import { useNavigate } from 'react-router-dom'

export default function Home() {

    const navigate = useNavigate()
    const [ buttonText, setButtonText ] = useState('Se connecter')
    const [ token,  setToken ] = useState(localStorage.getItem("token"))

    useEffect(() => {
        if (token) {
            setButtonText('Se déconnecter')
        } else {
            setButtonText('Se connecter')
        }
    }, [buttonText, setButtonText, token])

    const loginLogout = () => {
        if (token) {
            localStorage.removeItem("token")
            setToken(null)
        } else {
            navigate('/sign')
        }
    }

  return (
    <div className="main-div">
      <div className='div-log'>
        <button onClick={loginLogout}>{buttonText}</button>
        </div>
    </div>
  )
}
