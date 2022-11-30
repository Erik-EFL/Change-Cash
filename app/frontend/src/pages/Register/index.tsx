import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IRegister } from '../../interfaces/register.interface'
import Request from '../../services/api'
import { CardRegister, Container, Input } from './styles'

function Register() {
  const navigate = useNavigate()
  const [isBtnDisabled, setIsBtnDisabled] = useState(true)
  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: '',
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
        navigate('/')
      } else if (data.status !== 201) {
        alert(data.statusText)
      }
    }
  }

  useEffect(() => {
    fieldsVerify(registerData)
  }, [registerData])

  return (
    <Container>
      <CardRegister>
        <h1>Faça seu registro</h1>
          <form className="input-login">
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
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              id="email"
              value={ registerData.email }
              onChange={ (event) => setRegisterData(
                { ...registerData, email: event.target.value },
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
          </form>
          <button
            type="submit"
            onClick={ handleSubmit }
            disabled={ isBtnDisabled }
          >
            Confirmar
          </button>
          <Link to="/">Ja possuo uma conta</Link>
      </CardRegister>
    </Container>

  )
}

export default Register
