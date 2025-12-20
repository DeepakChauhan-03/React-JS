import React from 'react'
import AddToCart from './AddToCart'

const Header = () => {
  return (
    <div>
      <header className='w-full h-18 bg-blue-400 flex items-center justify-between px-2'>
        <div className='font-bold text-3xl text-gray-800'>FlipKart</div>
        <div className='flex gap-9 font-bold text-xl'>
            <a href="#">Home</a>
            <a href="#">Products</a>
        </div>
        <AddToCart />
      </header>
    </div>
  )
}

export default Header
