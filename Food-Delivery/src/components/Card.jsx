import React, { useState } from 'react'
import { LuLeafyGreen } from 'react-icons/lu'
import {GiChickenOven} from 'react-icons/gi'
import { food_items } from '../food'
import {useDispatch} from 'react-redux'
import { AddItem } from '../redux/cartSlice'
 import { ToastContainer, toast } from 'react-toastify';


//this is food card
const Card = ({name,image,id,type,price}) => {
  //redux
let dispatch = useDispatch();

  return (
    <div className='w-72 h-100 bg-white p-4 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-300'>
         <div className='w-full h-[50%] overflow-hidden rounded-lg '>
              <img src={image} alt="" className='object-cover'/>
         </div>
         <div className='text-2xl font-semibold '>
           {name}
         </div>
         <div className='w-full flex justify-between items-center'>
              <div className='text-lg font-bold text-green-500'>Rs {price}</div>
              <div className='text-green-500 text-lg font-semibold'>{type==='veg' ? <LuLeafyGreen /> : <GiChickenOven /> } <span>{type}</span></div>
         </div>
         <button className='w-full p-3 rounded-lg hover:bg-green-500 transition-all 
          bg-green-400 text-white' onClick={()=>{dispatch(AddItem({id:id,name:name,price:price,image:image,qty:1}))
          toast.success("Item added")}}>Add to dish</button>
    </div>
  )
}

export default Card
