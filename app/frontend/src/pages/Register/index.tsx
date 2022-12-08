import { Visibility, VisibilityOff } from '@mui/icons-material'
import { FormControl, IconButton, Input, InputAdornment, InputLabel } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../../Components/header/Header'
import { IRegister } from '../../interfaces/register.interface'
import Request from '../../services/api'
import { CardRegister, Container, InputRegister } from './styles'

function Register() {
  const navigate = useNavigate()
  const [isBtnDisabled, setIsBtnDisabled] = useState(true)
  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: '',
    showPassword: false,
  })

  const fieldsVerify = (data: IRegister) => {
    const { username, email, password } = data;

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/i;
    const isEmailValid = emailRegex.test(email);

    const isPasswordValid = password ? password.length >= Number('8') : '';
    const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
    const validPass = passRegex.test(password);

    const isNameValid = username ? username.length >= Number('3') : '';

    const fields = [email, password, username];
    const validateFields = fields.every((field) => field !== '');

    const isValid = isPasswordValid && isEmailValid && validateFields && isNameValid && validPass;

    return isValid
      ? setIsBtnDisabled(false)
      : setIsBtnDisabled(true);
  };

  const getData = async (info: IRegister) => {
    const data = await Request.register(info);
    return data;
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    const data = await getData(registerData)
    if (data) {
      if (data.status === 201) {
        navigate('/login')
      } else if (data.status !== 201) {
        alert(data.statusText)
      }
    }
  }

  useEffect(() => {
    fieldsVerify(registerData)
  }, [registerData])

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
        <CardRegister>
          <h1>Registre-se</h1>
            <form className="input-login">
              <InputRegister
                label="Nome"
                variant="standard"
                type="text"
                name="username"
                id="username"
                value={ registerData.username }
                onChange={ (event) => setRegisterData(
                  { ...registerData, username: event.target.value },
                ) }
              />
              <InputRegister
                label="Email"
                variant="standard"
                type="email"
                name="email"
                id="email"
                value={ registerData.email }
                onChange={ (event) => setRegisterData(
                  { ...registerData, email: event.target.value },
                ) }
              />
              <FormControl sx={{ width: '24.5ch', marginLeft: '-1px' }} variant="standard">
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
            </form>
            <button
              className="button"
              type="submit"
              onClick={ handleSubmit }
              disabled={ isBtnDisabled }
            >
              Confirmar
            </button>
        </CardRegister>
      </Container>
    </>
  )
}

export default Register
