import * as Styled from './styles'
import SideBar from '../../Components/sidebar/SideBar'
import DashNav from '../../Components/NavDashboard/DashNav'
import Transactions from '../../Components/Transações/Transactions'
import { Container } from '@mui/material'

function Home() {
  return (
    <Container sx={{
      marginTop: '2rem',
    }}>
      <Styled.Container>
        <SideBar />
        <DashNav />
        <Transactions />
      </Styled.Container>
    </Container>
  )
}

export default Home
