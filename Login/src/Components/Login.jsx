import React from 'react'

const Login = () => {
  return (
    <div className='mx-8'>   
      <h1 className='text-4xl font-semibold my-8'>Login Form</h1>
      <div className='forminput flex flex-col gap-7 my-7 text-2xl '>
      <input 
      className='h-12 w-80 border-2 rounded px-3' 
      type="text" placeholder='E-mail address' />

      <input
      className='h-12 w-80 border-2 rounded px-3'
      type="text" placeholder='Password' />
      </div>
          <a href='#' className='mx-40 w-full text-xl text-blue-600 whitespace-nowrap'>Forgot Password?</a>
      <div className="btn">
        <button className='w-80 my-2 py-2 bg-blue-900 text-white text-xl rounded '>Login</button>
      </div>
    <p className='text-xl mx-10 py-2'>Not a Member? 
    <a href="#" 
    className='text-blue-400'>SignUp now</a> </p>
    </div>
  )
}

export default Login
