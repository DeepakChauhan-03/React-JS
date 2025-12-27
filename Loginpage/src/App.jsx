import React from 'react'
import Home from './Components/Home'
import Signup from './Components/Signup'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Login from './Components/Login'
import Check from './Components/Check'
import About from './Components/About'

const App = () => {
  return (
    <div>
      <BrowserRouter >
         <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
