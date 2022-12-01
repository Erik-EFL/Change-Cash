import React from 'react'
import { useQuery } from 'react-query'
import Helpers from '../../../../services/Utils/Functions'
import Request from '../../../../services/api'

function Amount() {

  const { data, isLoading, error } = useQuery('amount',
  () => Request.getUserInfo())

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error:</div>

  const { account } = data?.data

  return (
    <>
    <ul>
      <li>
        <p>{Helpers.formatAmount(account.balance)}</p>
      </li>
    </ul>
  </>
  )
}

export default Amount
