import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';

const Nav = () => {
 //getting data from contextAPI
   let {input,setInput,Cate,setCate, showCart, setshowCart} = useContext(dataContext)

   //filter items by search
   useEffect(()=>{
       let newlist = food_items.filter((item)=>(item.food_name.includes(input) || item.food_name.toLowerCase().includes(input)))
       setCate(newlist)
   },[input])

    //redux part
  let items = useSelector(state=>state.cart)
  return (
    <div className="nav w-full h-25 flex items-center justify-between p-5 md:p-7 ">
        <div className='text-4xl shadow-2xl h-[60px] w-[60px] bg-white flex items-center justify-center rounded'>
           <MdFastfood className='h-[30px] w-[30px] text-green-500' />
        </div>
       
           <form 
           onSubmit={(e)=>e.preventDefault()}
           className='flex items-center  gap-10 w-[50%] h-[55px] px-5
            bg-white rounded shadow-2xl md:w-[65%]'>
             <IoIosSearch className='text-green-500 h-7.5 w-7.5' />
            <input 
            onChange={(e)=> setInput(e.target.value)}
            value={input}
            className='border h-full w-full outline-none text-2xl border-none md:text-xl'
            type="text" placeholder='Search here...'/>
           </form>
        
        <div 
        onClick={()=>setshowCart(true)}
        className='relative  shadow-2xl h-[60px] w-[60px] bg-white flex items-center justify-center rounded'>
             <span className='absolute top-0.5 right-1.5 font-medium text-green-500 text-xl'>{items.length}</span>
            <LuShoppingBag className='h-[30px] w-[30px] text-4xl text-green-500' />
        </div>
    </div>
  )
}

export default Nav
