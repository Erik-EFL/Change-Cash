import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material'
import { Alert, FormControl, IconButton, Input, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation, useNavigation } from 'react-router-dom'
import Header from '../../Components/header/Header'
import Request from '../../services/api'
import { CardLogin, Container } from './styles'

function Login() {
  const navigate = useNavigate()
  const location = useLocation()
  const navigation = useNavigation()
  const [error, setError] = useState('');
  const [registerData, setRegisterData] = useState({
    username: '',
    password: '',
    showPassword: false,
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
        navigate('/dashboard')
      }).catch((error) => {
        setError(error.response.data.message)
      })
  }

  const handleClickShowPassword = () => {
    setRegisterData({
      ...registerData,
      showPassword: !registerData.showPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleChange =
  (prop: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, [prop]: event.target.value });
  };

  return (
    <>
      <Header />
      <Container>
        <CardLogin>
          <h1>Login</h1>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
              Nome
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              value={registerData.username}
              onChange={handleChange('username')}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={registerData.showPassword ? 'text' : 'password'}
            value={registerData.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                    {registerData.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <button
            className={ navigation.state === "loading" ? "loading" : "" }
            type="submit"
            onClick={ handleSubmit }
          >
            Login
          </button>
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
    </>
  )
}

export default Login
