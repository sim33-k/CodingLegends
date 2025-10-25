
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
      <Layout>
        <Routes>

            <Route path="/" element={<Dashboard/>} />
            <Route path="/menu" element={<MenuOrder />} />

        </Routes>
      </Layout>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
