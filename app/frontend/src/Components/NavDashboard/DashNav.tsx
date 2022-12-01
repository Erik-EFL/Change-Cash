import { useState } from 'react'
import Request from '../../services/api'
import * as Styled from './styles'
import { useQuery } from 'react-query'
import FormTransaction from './subComponents/FormTransaction'
import Amount from './subComponents/Amount'

function DashNav() {

 const [newData, setNewData] = useState([])


  const { isLoading, error } = useQuery('account',
  () => Request.getUserInfo(), {
    onSuccess: (data) => {
      setNewData(data.data.transactions)
    }
  })


  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error:</div>

  return (
    <Styled.NavMenu>
      <FormTransaction />
      <div>
        <span className='saldo'>Saldo:</span>
        <Amount />
      </div>
    </Styled.NavMenu>
  )
}

export default DashNav
