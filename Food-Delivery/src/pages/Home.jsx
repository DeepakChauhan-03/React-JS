import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import Categories from '../Categories'
import {food_items} from '../food'
import Card from '../components/Card'
import { dataContext } from '../context/UserContext'

const Home = () => {
  //filer product on the basis of category
 
  let {Cate,setCate,input} = useContext(dataContext);
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
    </div>
  )
}

export default Home
