import '../App.css'

export default function Sign() {
  return (
    <div className='main-div'>
        <h2>Connexion</h2>
      <form className='login-form'>
          <input type="email" id="email" name='email' placeholder='email' required />
          <input type="password" id="password" name='password' placeholder='mot de passe' required />
          <button type='submit'>Se connecter</button>
        </form>
    </div>
  )
}
