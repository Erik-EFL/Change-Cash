import { useState } from 'react'
import Helpers from '../../services/Utils/Functions'
import * as Styled from './styles'
import useFetch from './sub component/Filter'

function Transactions() {
  const [success, setSuccess] = useState('')
  const { Render, newData, data, isLoading, error } = useFetch()

  if (isLoading) return <div>Loading...</div>
  if (error) return <span>An error has occurred</span>

  const { transactions } = data?.data

  return (
    <Styled.Container>
      <Styled.filtersContainer>
        {Render()}
      </Styled.filtersContainer>
      <Styled.cardContainer>
      {transactions &&
        newData.map((transaction: any) => (
          <Styled.Card>
            <Styled.CardHeader>
              <h1>Transação</h1>
            </Styled.CardHeader>
            <Styled.CardBody>
              <div><span>De:</span> <span>{Helpers.formateIniciais(transaction.debitedAccountId)}</span></div>
              <div><span>Para:</span> <span>{Helpers.formateIniciais(transaction.creditedAccountId)}</span></div>
              <div><span>Valor:</span> <span>{Helpers.formatAmount(transaction.value)}</span></div>
            </Styled.CardBody>
            <Styled.CardFooter>
              <div><span>Data:</span> <span>{Helpers.formatDate(transaction.createdAt)}</span></div>
            </Styled.CardFooter>
          </Styled.Card>
        )
      )}
      </Styled.cardContainer>
    </Styled.Container>
  )
}

export default Transactions
