import { useState } from 'react'
import { useQuery } from 'react-query'
import Request from '../../../../services/api'

function useFetch() {
  const [newData, setData] = useState([])
  const [filterData, setFilterData] = useState({
    date: '',
  })
  const [filterTransactions, setFilterTransactions] = useState({
    type: '',
  });
  const [resError, setError] = useState()

  /* faz a requisição a api */
  const { data, isLoading, error, isError } = useQuery('users',
  () => Request.getUserInfo(), {
    onSuccess: (data) => {
      setData(data.data.transactions)
    },
    onError: (error: any) => {
      setError(error.response.data.message)
    }
  })

   /* faz o filtro por datas */
  const filterTransactionsByDate = (dateForFilter: string, data: any) => {
    const transactionsByDate = data.filter((transaction: any) => {
      return transaction.createdAt.includes(dateForFilter)
    })
    return transactionsByDate
  }

  /* faz o filtro por transações */
  function orderTransaction(data: any, username: any) {
    if (filterTransactions.type === 'received') {
    const transactionsReceived = data.filter((transaction: any) => {
      return transaction.creditedAccountId === username
    })
      console.log(transactionsReceived);
      setData(transactionsReceived)
    }
    if (filterTransactions.type === 'sent') {
      const transactionsSent = data.filter((transaction: any) => {
        return transaction.debitedAccountId === username
      })
      setData(transactionsSent)
    }
    if (filterTransactions.type === 'all') {
      setData(data)
    }
  }

  function RenderFilter() {
    return (
      <>
        <div>
          <div>
            <label htmlFor="date">Data</label>
            <input
                type="date"
                name="datas"
                id="datas"
                value={filterData.date}
                onChange={(event) => setFilterData({ ...filterData, date: event.target.value })}
              />
          </div>
          <div>
            <label htmlFor="mesAno">Mes e Ano</label>
            <input
              type="month"
              name="mesAno"
              id="mesAno"
              value={filterData.date}
              onChange={(event) => setFilterData({ ...filterData, date: event.target.value })}
            />
          </div>
          <button onClick={() => setData(
            filterTransactionsByDate(filterData.date, data?.data.transactions)
            )}>Filtrar</button>
          <div>
            <label htmlFor="type">Transações</label>
            <select
              name="type"
              id="type"
              value={filterTransactions.type}
              onChange={(event) => setFilterTransactions({ ...filterTransactions, type: event.target.value })}
            >
              <option value={'all'}>Selecione</option>
              <option value={'received'}>Recebidas</option>
              <option value={'sent'}>Enviadas</option>
            </select>
          </div>
          <button onClick={() => orderTransaction(data?.data.transactions, data?.data.user.username)}>Filtrar</button>
          <button onClick={() => setData(data?.data.transactions)}>Limpar</button>
        </div>
      </>
    )
  }


  return { Render: RenderFilter, newData, data, isLoading, error, filterTransactionsByDate, resError, isError }
}


export default useFetch

