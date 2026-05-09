import React from 'react'
import { LuLeafyGreen } from 'react-icons/lu'

//this is food card
const Card = ({name,image,id,type,price}) => {
  return (
    <div className='w-72 h-100 bg-white p-4 rounded-lg flex flex-col gap-3 shadow-lg'>
         <div className='w-full h-[50%] overflow-hidden rounded-lg '>
              <img src={image} alt="" className='object-cover'/>
         </div>
         <div className='text-2xl font-semibold '>
           {name}
         </div>
         <div className='w-full flex justify-between items-center'>
              <div className='text-lg font-bold text-green-500'>Rs {price}</div>
              <div className='text-green-500 text-lg font-semibold'> <LuLeafyGreen />  <span>{type}</span></div>
         </div>
         <button className='w-full p-3 rounded-lg hover:bg-green-200 transition-all 
          bg-green-200 text-gray-700'>Add to dish</button>
    </div>
  )
}

export default Card
