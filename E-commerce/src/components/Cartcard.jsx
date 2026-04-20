import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import image1 from '../assets/image1.jpg'
import { useDispatch } from 'react-redux';
import { RemoveItem } from '../redux/cartSlice';

const Cartcard = ({name,image,price,id}) => {
    let dispatch = useDispatch();
  return (
    <div className='cartcard flex items-center justify-between m-15 h-60 rounded-3xl shadow-2xl'>
        <div className="leftcard flex items-center px-20 ">
             <img className='h-42' src={image} alt="" />
             <div className="name-price flex flex-col pl-6 text-2xl">
                <span>{name}</span>
                <span>Rs {price}/-</span>
             </div>
        </div>
        <div className="rightcard text-2xl pr-5">
             <button 
             onClick={()=>{
                dispatch(RemoveItem(id))
                alert("Product removed")
             }}
             className='flex items-center gap-2 bg-red-500 rounded-3xl px-4  py-2.5'>Remove   <RiDeleteBin6Line /></button>
            
        </div>
    </div>
  )
}

export default Cartcard
