import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import TicketPage from './page/TicketPage'
import Home from './page/Home'
import TicketDetail from './page/TicketDetail'
import LoginPage from './page/LoginPage'

function App() {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/dashboard' element={<TicketPage />} />
        <Route path='/ticket/:id' element={<TicketDetail />} />
        <Route exact path='/login' element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App
