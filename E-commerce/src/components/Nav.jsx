import React from 'react'
import { FaShopify } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { Link } from 'react-router-dom';

//Redux toolkit
import { useDispatch, useSelector } from 'react-redux';


const Nav = () => {
    const dispatch = useDispatch();
    const items = useSelector((state)=> state)
    console.log(items)
  return (
    <div>
      <div className="top bg-gray-800 text-white flex items-center justify-between px-5 py-6">
           <div className="logo flex gap-1 items-center text-3xl">
            <h1>Shopify</h1>
            <FaShopify />
           </div>
           <form className='inputsearch bg-white text-black flex w-[55%] h-12 items-center justify-between rounded-xl '>
            <input type="text" 
            className='font-semibold text-xl h-full w-[80%] px-7 outline-0'
            placeholder='Search items...'/>
             <IoMdSearch className='text-2xl w-[20%]' />
           </form>
           <div className="cartbox flex  ">
            <BsCart3  className='text-3xl'/>
            <span className='absolute top-4 right-4.5'>{items.cart.length}</span>
           </div>
      </div>
      <div className="bottom bg-gray-700 text-white flex 
      items-center justify-center gap-9 text-xl p-3 shadow-xl/30 ">
              <Link to={"/"}><h4>Home</h4></Link>
                <Link to={"/shop"} ><h4>Shop</h4></Link>
                <Link to={"/cart"}> <h4>Cart</h4></Link>
                <Link to={"/contact"}><h4>Contact</h4></Link>
      </div>
    </div>
  )
}

export default Nav
