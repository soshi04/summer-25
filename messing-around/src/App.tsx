import { Route, Routes } from 'react-router-dom'
import MainPageH from './pages/harrison/MainPageH'
import MainPageS from './pages/sohum/MainPageS'
import StartPage from './Start'
import './App.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<StartPage/>}/>
        <Route path='/harrison' element={<MainPageH/>} />
        <Route path='/sohum' element={<MainPageS/>} />
      </Routes>
    </div>
  )
}

export default App
