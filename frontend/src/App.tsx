
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import MenuOrder from './pages/MenuOrder'
import Reports from './pages/Reports'


function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MenuOrder />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
