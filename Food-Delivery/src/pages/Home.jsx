import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import Categories from '../Categories'
import {food_items} from '../food'
import Card from '../components/Card'
import { dataContext } from '../context/UserContext'
import { RxCross2 } from "react-icons/rx";

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
          Cate.map((item)=>{
                return <Card name={item.food_name} id={item.id} image={item.food_image} type={item.food_type} price={item.price} />
          })
        }
      </div>

     //Add to cart
      <div className={`h-full w-[40%] bg-white fixed top-0 right-0 
       transition-all duration-500
        ${showCart? "translate-x-0 ":"translate-x-full"}`}>
           <header className='flex items-center justify-between p-7'>
               <span className='text-3xl font-semibold text-green-400'>Order items</span>
               <RxCross2 
               onClick={()=> setshowCart(false)}
               className='text-3xl text-green-400' />
           </header>

      </div>
    </div>
  )
}

export default Home
