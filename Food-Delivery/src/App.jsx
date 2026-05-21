import React from 'react'
import Home from './pages/Home'
 import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div className='bg-gray-100' >
     <Home />
     <ToastContainer />
    </div>
  )
}

export default App
