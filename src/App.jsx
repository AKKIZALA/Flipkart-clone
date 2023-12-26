import React from 'react'
import Navbar from './components/Navbar'
import "./App.css"
import Home from './components/Home'
import Footer from './components/Footer.jsx'
import Cart from './components/Cart.jsx'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
   <>
   <Navbar/>
   <Routes>
   <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<Cart/>}/>
   </Routes>
   <Footer/>
   </>
  )
}

export default App