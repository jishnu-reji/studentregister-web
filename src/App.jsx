import { Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './pages/Register'
import Home from './pages/Home'
import Table from './pages/Table'

function App() {

  return (
    <>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/table' element={<Table/>}/>
        </Routes>
    </>
  )
}

export default App
