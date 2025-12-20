import React from 'react'
import AddToCart from './AddToCart'
import { addItem } from '../Redux/Slice'
import {useDispatch} from 'react-redux'

const Product = () => {
   //Hook
   const dispatch = useDispatch()

  return (
    <div className='h-120 w-230 rounded-xl mx-4 flex relative shadow-xl shadow-gray-300'>
      <div className="left w-[45%] h-full ">
        <img 
        className='h-full w-full object-cover rounded-xl  '
        src="https://tse3.mm.bing.net/th/id/OIP.E2KzLGz3OADm2F2ssWuOOwHaE8?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
      </div>
      <div className="right w-[55%] h-full flex flex-col gap-5 py-10 px-2">
        <h1 className='text-4xl font-semibold'>Wireless Headphones</h1>
        <span className='text-red-500 font-semibold text-xl'>$129.99</span>
        <p className='tracking-tight '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque deleniti eveniet, totam cum quisquam impedit dolorem explicabo quas neque facilis.</p>
        <div className="btn">
            <button
            onClick={()=>dispatch(addItem(1))}
            className='px-4 py-2 bg-blue-600 rounded-xl font-semibold text-white'><h3>Add to Cart</h3></button>
        </div>
      </div>
    </div>
  )
}

export default Product
