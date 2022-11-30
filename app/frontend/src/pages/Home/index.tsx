import React from 'react'
import Header from '../../Components/header/Header'
import * as Styled from './styles'
import SideBar from '../../Components/sidebar/SideBar'
import DashNav from '../../Components/NavDashboard/DashNav'
import Transactions from '../../Components/Transações/Transactions'

function Home() {
  return (
    <>
      <Header />
      <Styled.Container>
        <SideBar />
        <DashNav />
        <Transactions />
      </Styled.Container>
    </>
  )
}

export default Home
