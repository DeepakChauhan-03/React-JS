import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri"; 
import { useDispatch } from 'react-redux';
import { DecrementQty, IncrementQty, RemoveItem } from '../redux/cartSlice';


// this component contain add-to-cart details

const Card2 = ({name,price,image,id,qty}) => {

    let dispatch = useDispatch()
  return (
    <div className='h-40 w-[90%] bg-white rounded-2xl flex'>
        {/* this is box 1 left side */}
       <div className='box1 h-full w-[70%] flex  '>
        <div className='w-[60%] h-full flex items-center justify-center   '>
            <img 
            className='w-[90%] h-[85%] object-fill rounded-2xl'
             src={image} alt="" />
        </div>
        <div className='w-[40%] h-full  flex flex-col items-start p-2 justify-center gap-4'>
            <span className='font-semibold text-xl'>{name}</span>
            <div className='h-10 w-25 p-2 text-xl text-green-500 flex items-center justify-between border-2 border-green-500 rounded-xl '>
                <div onClick={()=>{qty>1 ? dispatch(DecrementQty(id)): 1}}>-</div>
                <div className='bg-gray-300 w-10  px-4'>{qty}</div>
                <div onClick={()=>{dispatch(IncrementQty(id))}}>+</div>
            </div>
        </div>
       </div>

       {/* this is box 2 rightside */}
       <div className='box2 h-full w-[30%] flex flex-col items-end justify-center gap-5 p-3 text-2xl'>
          <span className='text-green-400'>Rs {price}/-</span>
           <RiDeleteBin6Line  className='text-red-600 cursor-pointer' onClick={()=>dispatch(RemoveItem(id))}/>
       </div>
    </div>
  )
}

export default Card2
