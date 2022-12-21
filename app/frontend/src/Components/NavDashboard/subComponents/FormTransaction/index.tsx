import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import Request from '../../../../services/api'
import { CreateTransaction } from '../../../../types/types'
import * as Styled from './styles'


function FormTransaction() {
  const queryClient = useQueryClient()
  const [transaction, setTransaction] = useState<CreateTransaction>({
    debitedAccountName: '',
    creditedAccountName: '',
    amount: 0,
  })
  const [success, setSuccess] = useState('')
  const [resError, setResError] = useState('')

  const { data, isError, isLoading, error } = useQuery('user', () => Request.getUserInfo())

  const { mutate: addNewTransaction } = useMutation((newTransaction: object | string) => {
    return Request.createTransaction(newTransaction)
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('users'),
      queryClient.invalidateQueries('amount'),
      setSuccess('Transação realizada com sucesso')
    }
  })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <>Error: {error}</>

  const { user } = data?.data

  const handleSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
    addNewTransaction(transaction)
    setTransaction({
      debitedAccountName: '',
      creditedAccountName: '',
      amount: 0,
    })
  }

  return (
    <Styled.Form>
      <input
        type="number"
        name="trValue"
        id="trValue"
        value={transaction.amount === 0 ? '' : transaction.amount}
        onChange={(event) => setTransaction({ ...transaction, amount: Number(event.target.value) })}
        placeholder='Insira um valor' />
      <input
        type="text"
        name="trName"
        id="trName"
        value={transaction.creditedAccountName}
        onChange={(event) => setTransaction({ ...transaction, creditedAccountName: event.target.value, debitedAccountName: user.username })}
        placeholder='Para quem?' />
      <button
        className='transfer'
        type='submit'
        onClick={handleSubmit}
      >
        Transferir
      </button>
    </Styled.Form>
  )
}

export default FormTransaction
