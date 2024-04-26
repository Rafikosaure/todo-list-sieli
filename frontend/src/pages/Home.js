import { useEffect, useState } from 'react'
import '../styles/Home.css'
import { useNavigate } from 'react-router-dom'
import { removeUser, selectUser } from '../redux/slices/UserSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Home() {

    const navigate = useNavigate()
    const [ buttonText, setButtonText ] = useState('Se connecter')
    const [ token,  setToken ] = useState(localStorage.getItem("token"))
    const dispatch = useDispatch()
    const currentUser = useSelector(selectUser)

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
            dispatch(removeUser(currentUser))
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
