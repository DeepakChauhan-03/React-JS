import React from 'react'
import Home from './pages/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />}/>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
