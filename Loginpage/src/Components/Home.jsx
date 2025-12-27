import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
   const logout = ()=>{
    localStorage.removeItem("user");
    navigate("/")
   }
   
  return (
    <div>
        <Navbar />
      <div className='flex justify-around my-6'>
        <h1 className='text-4xl font-semibold '>Welcome to home page!</h1>
        <button
        onClick={logout}
        className='px-5 py-2 bg-blue-600 text-white rounded'>Logout</button>
      </div>
    </div>
  )
}

export default Home
