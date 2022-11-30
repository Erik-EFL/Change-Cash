import React, { useState } from 'react'
import Request from '../../services/api'
import * as Styled from './styles'
import useFetch from '../Transações/sub component/Filter'
import { Alert, AlertTitle, Collapse, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

function DashNav() {
  const [transaction, setTransaction] = useState({
    nameDebit: '',
    nameCredited: '',
    value: '',
  })
  const [success, setSuccess] = useState('')
  const [resError, setResError] = useState('')

  const { data, isLoading, error, RenderList } = useFetch()


  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error:</div>

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    await Request.createTransaction(transaction).then((response) => {
      setSuccess(response.statusText)
    }).catch((error) => {
      setResError(error.response.data.message)
    })
    setTransaction({
      nameDebit: '',
      nameCredited: '',
      value: '',
    })
  }

  const { user, account } = data?.data

  return (
    <Styled.NavMenu>
      <div>
        <input
          type="number"
          name="trValue"
          id="trValue"
          value={transaction.value}
          onChange={(event) => setTransaction({ ...transaction, value: event.target.value })}
          placeholder='Insira um valor' />
        <input
          type="text"
          name="trName"
          id="trName"
          value={transaction.nameCredited}
          onChange={(event) => setTransaction({ ...transaction, nameCredited: event.target.value, nameDebit: user.username })}
          placeholder='Para quem?' />
        <button
          className='transfer'
          type='submit'
          onClick={handleSubmit}
        >
          Transferir
        </button>
      </div>
      <div>
        <span className='saldo'>Saldo:</span>
        {RenderList({account})}
      </div>
      {success &&
        <Alert sx={{
          width: '15%',
          position: 'absolute',
          top: '0',
          left: '50%',
          right: '50%',
          transform: 'translate(-50%, 0)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

        }} severity="success" color='success' onClose={() => { setResError('') }}>
          <AlertTitle>Transação efetuada</AlertTitle>
          <strong>{success}</strong>
        </Alert>
      }
      {resError &&
        <Alert sx={{
          width: '15%',
          position: 'absolute',
          top: '0',
          left: '50%',
          right: '50%',
          transform: 'translate(-50%, 0)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

        }} severity="error" color='error' onClose={() => { setResError('') }} >
          <strong>{resError}</strong>
        </Alert>
      }
    </Styled.NavMenu>
  )
}

export default DashNav
