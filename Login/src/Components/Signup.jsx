import React from 'react'

const Signup = () => {
  return (
    <div className='px-8'>
      <h1 className='py-7 text-3xl font-semibold'>Signup Form</h1>
      <div className="input flex flex-col py-5 font-medium text-xl gap-6">
        <input
        className='h-12 w-80 border-2 rounded px-3'
        type="email" placeholder='Enter E-mail'  />
        <input
         className='h-12 w-80 border-2 rounded px-3'
        type="password" placeholder='Enter password' />
        <input
         className='h-12 w-80 border-2 rounded px-3'
        type="password" placeholder='Confirm password' />
      </div>
      <button className='w-80 my-2 py-2 bg-blue-900 text-white text-xl rounded '>SignUp</button>
    </div>
  )
}

export default Signup
