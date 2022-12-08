import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import * as Styled from './styles'

function Header() {
  const navigate = useNavigate()

  return (
    <Styled.Header>
      <Styled.Logo>
        <Link to="/"><h1>Change Cash</h1></Link>
      </Styled.Logo>
      <Styled.Nav>
        <NavLink className='button' to='/login'
        >
          Login
        </NavLink>
        <NavLink className='button' to='/register'>
          Registre-se
        </NavLink>
      </Styled.Nav>
    </Styled.Header>
  )
}

export default Header;
