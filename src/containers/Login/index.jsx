import React, { useState } from 'react'
import FormGroup from '../../components/FormGroup'
import { headers } from '../../core/request'
import './styled.css'

const Login = () => {
  const [userValue, setUserValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  const onSubmit = () => {
    const data = {
      login: userValue,
      senha: passwordValue,
    }

    fetch('http://localhost:8080/login', { method: 'POST', headers: headers, body: JSON.stringify(data)})
    .then(res => res.json())
    .then(
      (result) => {
        localStorage.setItem('token', result.jwtToken)
      }
    )
  }

  return (
    <div className='LoginContainer'>
      <form className='LoginForm'>
        <FormGroup
          id='usuario'
          name='usuario'
          value={userValue}
          onChange={setUserValue}
          label='Usuário'
          placeholder='Insira o nome de usuário'
        />
        <FormGroup
          id='senha'
          name='senha'
          value={passwordValue}
          onChange={setPasswordValue}
          label='Senha'
          placeholder='Insira a senha'
          type='password'
        />
        <div className='ButtonContainer'>
          <button
            type='button'
            onClick={onSubmit}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login