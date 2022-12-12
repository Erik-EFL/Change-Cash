import React from 'react'
import * as Styled from './styles'
import Helpers from '../../services/Utils/Functions'
import { useQuery } from 'react-query'
import Request from '../../services/api'
import avatar from './helper/123456imag.png'
import { useNavigate } from 'react-router-dom'

function SideBar() {
  const navigate = useNavigate()

  const { data, isLoading, error } = useQuery('users', () => Request.getUserInfo())

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  const { account, user } = data?.data

  return (
    <>
      <Styled.SideBar>
        <Styled.Capa />
        <Styled.UserImage>
          <img src={avatar} alt={`Imagem de ${avatar}`} />
        </Styled.UserImage>
        <Styled.UserInfo>
          <h1>{Helpers.formateIniciais(user.username)}</h1>
          <h1>{user.email}</h1>
          <div><span>Conta:</span> <span>{Helpers.convertNumbers(account.id)}</span></div>
          <div><span>Agência:</span> <span>{Helpers.convertNumbers(account.agency)}</span></div>
        </Styled.UserInfo>
        <button
          className='logout'
          onClick={() => {
            navigate('/')
            localStorage.clear()
          }}
        >
          Logout
        </button>
      </Styled.SideBar>
    </>
  )
}

export default SideBar
