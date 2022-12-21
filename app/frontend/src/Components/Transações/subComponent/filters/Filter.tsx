import { useState } from 'react'
import { useQuery } from 'react-query'
import Request from '../../../../services/api'

function useFetch() {
  const [newData, setData] = useState([])
  const [filterData, setFilterData] = useState({date: ''})
  const [filterTransactions, setFilterTransactions] = useState({type: ''});
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
    return transactionsByDate || data
  }
  /* faz o filtro por transações */
  function orderTransaction(data: any, username: any) {
    switch (filterTransactions.type) {
      case 'received':
        setData(data.filter((transaction: any) => transaction.creditedAccountId === username));
        break;
      case 'sent':
        setData(data.filter((transaction: any) => transaction.debitedAccountId === username));
        break;
      case 'all':
        setData(data);
        break;
      default:
        const select = document.getElementById('type') as HTMLSelectElement;
        select.selectedIndex = 0;
        setData(data);
        break;
    }
  }
  /* restaura o valor default de todos os inputs */
  function resetFilter() {
    const select = document.getElementById('type') as HTMLSelectElement;
    select.selectedIndex = 0;
    const date = document.getElementById('datas') as HTMLInputElement;
    date.value = '';
    const month = document.getElementById('mesAno') as HTMLInputElement;
    month.value = '';
    setFilterData({ date: '' });
    setFilterTransactions({ type: '' });
    setData(data?.data.transactions);
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
          <button onClick={() => resetFilter() }>Limpar</button>
        </div>
      </>
    )
  }


  return { Render: RenderFilter, newData, data, isLoading, error, filterTransactionsByDate, resError, isError }
}


export default useFetch

