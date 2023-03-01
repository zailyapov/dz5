import { useState } from "react"
import {set, useForm} from "react-hook-form"

const App = () => {
  const [email, setEmail] = useState ('')
  const [password, setPassword] = useState ('')
  const [emailDirty, setEmailDirty] = useState (false )
  const [passwordDirty, setPasswordDirty] = useState (false)
  const [emailError, setEmailError] = useState ('Email не может быть пустым')
  const [passwordError, setPasswordError] = useState ('Пароль не может быть пустым')

  const blurHandler = (e) =>{
    switch(e.target.name){
      case 'email':
        setEmailDirty(true);
        break
      case 'password':
        setPasswordDirty(true); 
        break 
    }
  }


  return(
    <div className="app">
      <form>
        <h1>Регистрация</h1>
        {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
        <input onBlur={e => blurHandler(e)} name="email" type='text' placeholder="Введите свой email"></input>
        {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
        <input onBlur={e => blurHandler(e)} name="password" type='text' placeholder="Придумайте пароль"></input>
        <button type="submit">Регистрация</button>
      </form>
    </div>
  )
}

export default App