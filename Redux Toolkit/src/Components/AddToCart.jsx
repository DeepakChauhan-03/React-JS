import React from 'react'
import { useSelector } from "react-redux"

const AddToCart = () => {

    const selector = useSelector((state)=>state.cart.value)
  return (
    <div className='cart w-40 h-20 flex items-center justify-center relative'>
      <img 
      className='h-10 w-10 '
      src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3264057/shopping-cart-icon-md.png" alt="" />
      <span className='cart-count h-5 w-5 rounded-full bg-red-500 flex items-center justify-center text-white absolute top-4 right-14'>{selector}</span>
    </div>
  )
}

export default AddToCart
