import React from 'react'
import Contact from './Components/Contact'
import Home from './Components/Home'
import About from './Components/About'
import {Route, Routes} from 'react-router-dom'
import Nav from './Components/Nav'
import NotFound from './Components/NotFound'

const App = () => {

  return (
    <div>
    <Nav />
    <Routes >
       <Route path='/' element={<Home />}/>
       <Route path='/about' element={<About />}/>
       <Route path='/contact' element={<Contact />}/>
       <Route path ='*' element = {<NotFound />} />
    </Routes>
    </div>
  )
}

export default App
