import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import Request from '../../../../services/api'
import { CreateTransaction } from '../../../../types/types'
import * as Styled from './styles'


function FormTransaction() {
  const queryClient = useQueryClient()
  const [transaction, setTransaction] = useState<CreateTransaction>({
    nameDebit: '',
    nameCredited: '',
    value: '',
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
      nameDebit: '',
      nameCredited: '',
      value: '',
    })
  }

  return (
    <Styled.Form>
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
    </Styled.Form>
  )
}

export default FormTransaction
