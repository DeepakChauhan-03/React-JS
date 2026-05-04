import React from 'react'
import { MdFastfood } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";

const Nav = () => {
  return (
    <div className="nav w-full h-25 bg-gray-300 flex items-center justify-between p-6 ">
        <div className='text-4xl h-[60px] w-[60px] bg-white flex items-center justify-center rounded'>
           <MdFastfood className='h-[30px] w-[30px] text-green-500' />
        </div>
       
           <form className='flex item-center gap-10 w-[60%] h-[30px] px-5 bg-white '>
             <IoIosSearch />
            <input 
            className='border'
            type="text" placeholder='Serach here...'/>
           </form>
        
        <div className='text-4xl h-[60px] w-[60px] bg-white flex items-center justify-center rounded'>
            <LuShoppingBag className='h-[30px] w-[30px] text-green-500' />
        </div>
    </div>
  )
}

export default Nav
