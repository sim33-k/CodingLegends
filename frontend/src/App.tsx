
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import MenuOrder from './pages/MenuOrder'
import Dashboard from './pages/Dashboard'
import Layout from './components/Layout'


function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Layout>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/menu" element={<MenuOrder />} />
        </Layout>
      </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
