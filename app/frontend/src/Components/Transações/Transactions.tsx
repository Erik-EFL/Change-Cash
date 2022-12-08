import { useState } from 'react'
import Helpers from '../../services/Utils/Functions'
import * as Styled from './styles'
import useFetch from './subComponent/filters/Filter'
import { EuiAvatar, EuiTitle, EuiSpacer } from '@elastic/eui';

function Transactions() {
  const [success, setSuccess] = useState('')
  const { Render, newData, data, isLoading, error } = useFetch()

  if (isLoading) return <div>Loading...</div>
  if (error) return <span>An error has occurred</span>

  const { transactions, username } = data?.data

  const mapTransactions = !newData.length ? transactions : newData

  return (
    <Styled.Container>
      <Styled.filtersContainer>
        {Render()}
      </Styled.filtersContainer>
      <Styled.cardContainer>
      {transactions &&
        mapTransactions.map((transaction: any) => (
          <Styled.Card>
            <Styled.CardHeader>
              <h3>Transação</h3>
            </Styled.CardHeader>
            <Styled.CardBody>
              <div><span><EuiAvatar name={username} /></span> <span>{Helpers.formateIniciais(transaction.debitedAccountId)}</span></div>
              <div><span><EuiAvatar name={Helpers.formateIniciais(transaction.creditedAccountId)} /></span> <span>{Helpers.formateIniciais(transaction.creditedAccountId)}</span></div>
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
