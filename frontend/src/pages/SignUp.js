import '../App.css'

export default function SignUp() {
  return (
    <div className='main-div'>
        <h2>Inscription</h2>
      <form className='login-form'>
          <input type="email" id="email" name='email' placeholder='email' required />
          <input type="password" id="password" name='password' placeholder='mot de passe' required />
          <button type='submit'>S'inscrire</button>
        </form>
    </div>
  )
}
