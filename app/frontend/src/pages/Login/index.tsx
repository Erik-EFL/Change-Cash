import { Alert } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Request from '../../services/api'
import { CardLogin, Container, Input } from './styles'

function Login() {
  const navigate = useNavigate()
  const location = useLocation()
  const [error, setError] = useState('');
  const [registerData, setRegisterData] = useState({
    username: '',
    password: '',
  })

  useEffect(() => {
    if (location.pathname === '/') {
      localStorage.removeItem('user')
    }
  }, [])

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    await Request.login(registerData)
      .then((response) => {
        localStorage.setItem('user', JSON.stringify(response.data.token))
        navigate('/home')
      }).catch((error) => {
        setError(error.response.data.message)
      })
  }

  return (
    <Container>
      <CardLogin>
        <h1>NG Login</h1>
        <div className="input-login">
          <Input
            label="Nome"
            variant="outlined"
            type="text"
            name="username"
            id="username"
            value={ registerData.username }
            onChange={ (event) => setRegisterData(
              { ...registerData, username: event.target.value },
            ) }
          />
          <Input
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            id="password"
            value={ registerData.password }
            onChange={ (event) => setRegisterData(
              { ...registerData, password: event.target.value },
            ) }
          />
        </div>
        <button
          type="submit"
          onClick={ handleSubmit }
        >
          Login
        </button>
        <p>Ainda não possui conta </p>
        <Link to="/register">Registre-se</Link>
      </CardLogin>
      {error &&  <Alert sx={{
          width: '15%',
          position: 'absolute',
          top: '0',
          left: '50%',
          right: '50%',
          transform: 'translate(-50%, 0)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

        }} severity="error" color='error' onClose={() => { setError('') }}>{ error }</Alert>}
    </Container>
  )
}

export default Login
