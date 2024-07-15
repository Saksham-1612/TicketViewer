import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import TicketPage from './page/TicketPage'
import Home from './page/Home'

function App() {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/dashboard' element={<TicketPage />} />
      </Routes>
    </>
  )
}

export default App
