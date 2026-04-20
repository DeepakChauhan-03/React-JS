import React from 'react'
import emptycart from '../assets/emptycart.png'

const EmptyCart = () => {
  return (
    <div className='flex flex-col items-center justify-between gap-8 py-9'>
        <h1 className='text-4xl font-semibold underline'>Opss...the cart is empty</h1>
        <img src={emptycart} alt="" />
    </div>
  )
}

export default EmptyCart
