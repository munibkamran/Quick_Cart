import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import ProductDetail from './components/ProductDetail'
import AllProducts from './components/AllProducts'
import Contact from './components/Contact'
import About from './components/About'
import Cart from './components/Cart'
const App = () => {
  const [cart, setCart] = useState([])
  return (
    <>
    <Router>
      <Navbar cart={cart}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<ProductDetail cart={cart} setCart={setCart}/>}/>
        <Route path='/AllProduct' element={<AllProducts/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
