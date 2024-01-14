import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router'


import Layout from './components/Layout'
import Navbar from './components/Navbar'
import MarketPage from './pages/MarketPage'
import Basket from './pages/Basket'


const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route index element={<MarketPage/>} />
        <Route path='/basket' element={<Basket/>} />
        <Route path='*' element={<div><p>404 Not found</p></div>} />
      </Route>
    </Routes>
    </>
  )
}

export default App