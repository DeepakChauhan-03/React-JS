import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="nav w-full h-22 bg-black flex items-center">
         <ul>
            <li className='px-9 text-white font-medium text-2xl flex gap-8'>
                <a href="">Explore!</a>
                <a href="">Signup</a>
                <a href="">Login</a>
            </li>
         </ul>
      </div>
    </div>
  )
}

export default Navbar
