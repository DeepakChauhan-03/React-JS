import React from 'react'
import image1 from '../assets/image1.jpg'

const Product = ({id,name,image,price}) => {
  return (
    <div className='product w-80 h-132 p-9 rounded-2xl shadow-2xl hover:scale-95 cursor-pointer'>
          <img className='w-full h-[65%] object-contain' src={image} alt="" />
          <div className="product-details w-full h-[35%]  flex flex-col gap-3 items-start ">
               <span className='name text-2xl font-semibold'>{name}</span>
               <span className='price text-xl font-sm'>Rs {price}/-</span>
               <button className='bg-gray-800 rounded px-6 py-1 text-white text-lg font-semibold'> Add +</button>
          </div>
    </div>
  )
}

export default Product
