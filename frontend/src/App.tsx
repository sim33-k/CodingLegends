
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import MenuOrder from './pages/MenuOrder'
import Dashboard from './pages/Dashboard'


function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/menu" element={<MenuOrder />} />
      </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
