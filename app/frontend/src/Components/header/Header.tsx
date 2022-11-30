import React from 'react'
import { Link } from 'react-router-dom'
import * as Styled from './styles'

function Header() {
  return (
    <Styled.Header>
      <Styled.Logo>
        <h1>NG Challenge</h1>
      </Styled.Logo>
    </Styled.Header>
  )
}

export default Header;
