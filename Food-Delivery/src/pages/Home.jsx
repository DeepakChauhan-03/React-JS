import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import Categories from '../Categories'
import {food_items} from '../food'
import Card from '../components/Card'
import { dataContext } from '../context/UserContext'
import { RxCross2 } from "react-icons/rx";
import Card2 from '../components/Card2'
import { useSelector } from 'react-redux'
import {toast}  from 'react-toastify'

const Home = () => {
  //filer product on the basis of category
 
  let {Cate,setCate,input,showCart, setshowCart} = useContext(dataContext);
  function filter(category){
    if(category==='All'){
      setCate(food_items)
    }
    else{
      let newlist = food_items.filter((item)=>(item.food_category===category));
      setCate(newlist)
    }
  }
  //redux part
  let items = useSelector(state=>state.cart)
 
  //a variable where subtotal item price is stored
  let subtotal = items.reduce((total,item)=> total+item.qty*item.price,0)
  let deliveryFee = 20;
  let taxes = subtotal*0.5/100;
  let total = Math.floor(subtotal+deliveryFee+taxes);

  return (
    <div className='bg-slate-200'>
      <Nav />
      {
        !input? <div className='flex flex-wrap gap-5 items-center justify-center p-8 w-full '>
        {
          Categories.map((item)=>{
              return <div className='h-35 w-35 bg-white flex flex-col items-center
               justify-center gap-4 text-2xl font-semibold cursor-pointer
                text-gray-600 shadow-2xl rounded-lg hover:bg-green-200 transition-all duration-200'
                 onClick={()=>filter(item.name)} >
                {item.icon}
                {item.name}
              </div>
          })
        }
      </div> : null
      }
      
      <div className='w-full flex flex-wrap justify-center gap-5 px-5'>
        {
          Cate.length>1?  Cate.map((item)=>{
                return <Card name={item.food_name} id={item.id} image={item.food_image} type={item.food_type} price={item.price} />
          }) 
          :  <div className='text-green-400 text-2xl '>No Dish Found</div>
        }
        
      </div>

     {/* //Add to cart sidebar */}
      <div className={`h-full w-full md:w-[40%] flex flex-col items-center bg-gray-100 fixed top-0 right-0 
       transition-all duration-500 overflow-auto
        ${showCart? "translate-x-0 ":"translate-x-full"}`}>
           <header className='w-full flex items-center justify-between p-7'>
               <span className='text-3xl font-semibold justify-center text-green-400'>Order items</span>
               <RxCross2 
               onClick={()=> setshowCart(false)}
               className='text-3xl text-green-400' />
           </header>
           <div className='w-full mt-5 flex items-center flex-col gap-8 ' >
          {
            items.map((item)=>(
              <Card2  name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty}/>
            ))
          }
          </div>
          {/* //below the cart details where price section is shown */}
        {
          items.length>0 ? 
          <>
          <div className='w-full border-t-2 border-b-2 border-gray-500 mt-7 pb-6 '>
             <div className='w-full flex justify-between px-8 items-center mt-5'>
              <span className='text-lg text-gray-600 font-semibold'>Subtotal : </span>
              <span className='text-green-400 font-semibold text-lg '> Rs {subtotal}/-</span>
             </div>
             <div>
              <div className='w-full flex justify-between px-8 items-center mt-5'>
              <span className='text-lg text-gray-600 font-semibold'>Delivery Fee : </span>
              <span className='text-green-400 font-semibold text-lg '> Rs {deliveryFee}/-</span>
             </div>
             </div>
             <div>
              <div className='w-full flex justify-between px-8 items-center mt-5'>
              <span className='text-lg text-gray-600 font-semibold'>Taxes : </span>
              <span className='text-green-400 font-semibold text-lg '> Rs {taxes}/-</span>
             </div>
             </div>
          </div>
          {/* //total price */}
          <div className='w-full flex justify-between px-8 items-center mt-5'>
              <span className='text-2xl text-gray-700 font-bold'>Total : </span>
              <span className='text-green-500 font-bold text-2xl '> Rs {total}/-</span>
             </div>
             <button className='w-[84%] p-3 rounded-lg hover:bg-green-500 transition-all 
          bg-green-400 text-white mt-7 mb-10'onClick={()=> toast.success("Order placed...")}>Place Order</button> </> 
          : <div className='text-3xl text-green-400 font-medium'>Empty Cart</div>
        }
      </div>
    </div>
  )
}

export default Home
