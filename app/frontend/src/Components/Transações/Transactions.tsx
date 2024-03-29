import React, { useState } from 'react'
import Helpers from '../../services/Utils/Functions'
import * as Styled from './styles'
import useFetch from './subComponent/filters/Filter'
import { EuiAvatar } from '@elastic/eui';

interface CardColorProps {
  colorCard?: string | undefined | boolean
  valueColor?: string | undefined | boolean
}

const Transactions: React.FC<CardColorProps> = () => {
  const { Render, newData, data, isLoading, error } = useFetch()

  if (isLoading) return <div>Loading...</div>
  if (error) return <span>An error has occurred</span>

  const { transactions, user: { username } } = data?.data

  const mapTransactions = !newData.length ? transactions : newData

  return (
    <Styled.Container>
      <Styled.filtersContainer>
        {Render()}
      </Styled.filtersContainer>
      <Styled.cardContainer>
      {transactions &&
        mapTransactions.map((transaction: any) => (
          <Styled.Card colorCard={transaction.debitedAccountId === username}>
            <Styled.CardBody valueColor={transaction.creditedAccountId === username}>
              <div>
                <EuiAvatar name={Helpers.formateIniciais(transaction.debitedAccountId)} /><span>{Helpers.formateIniciais(transaction.debitedAccountId)}</span>
              </div>
              <div>
                <EuiAvatar name={Helpers.formateIniciais(transaction.creditedAccountId)} /><span>{Helpers.formateIniciais(transaction.creditedAccountId)}</span>
              </div>
              <Styled.CardHeader>
                <h5>Transferência</h5>
              </Styled.CardHeader>
              <div>
                <span className='amount'>{
                  transaction.creditedAccountId !== username
                    ? `- ${Helpers.formatAmount(transaction.value)}`
                    : `+ ${Helpers.formatAmount(transaction.value)}`
                }</span>
              </div>
            </Styled.CardBody>
            <Styled.CardFooter>
              <div>
                <span>{Helpers.formatDate(transaction.createdAt)}</span>
              </div>
            </Styled.CardFooter>
          </Styled.Card>
        )
      )}
      </Styled.cardContainer>
    </Styled.Container>
  )
}

export default Transactions
