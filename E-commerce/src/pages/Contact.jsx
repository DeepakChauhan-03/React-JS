import React from 'react'

const Contact = () => {
  return (
    <div className=' h-screen contact flex items-center justify-center '>
       <form 
        className='h-100 flex flex-col items-start  gap-5 '
       action="" method='POST'>
          <input
           className='h-12 w-100 p-4 outline-2'
          type="text" placeholder='Enter your name...' name='username' required />
          <input
          className='h-12 w-100 p-4 outline-2'
          type="email" placeholder='Enter your e-mail' name='email' required />
          <textarea 
          className='h-12 w-100 p-4 outline-2'
          name="message" placeholder='Message' required></textarea>
          <button className='bg-gray-800 text-white rounded-2xl px-5 py-3'>Submit</button>
       </form>
    </div>
  )
}

export default Contact
