import Inicio from './pages/Inicio'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
