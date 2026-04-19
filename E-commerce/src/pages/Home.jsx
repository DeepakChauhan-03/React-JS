import React from 'react'
import Nav from '../components/Nav'
import herobg from '../assets/bg0.gif'
import { Category } from '../Category'
import Product from '../components/Product'
import { dummydata } from '../Dummy'
import { useState } from 'react'


const Home = () => {
    let [cate, setCate] = useState(dummydata);
    function filterProducts(category){
        const updatedData = dummydata.filter((item)=>(
                item.category === category
        ) )
         setCate(updatedData);
    }
  return (
    <div>
      <div className="hero-bg mt-4 flex items-center justify-center">
        <img className='W-[50%] rounded-2xl shadow-2xl ' src={herobg} alt="" />
      </div>
    <div className="category flex w-full px-20 gap-7  ">
        {
        Category.slice(0,5).map((item)=>(
             <div 
             onClick={()=> filterProducts(item.name)}
             className="card w-full h-[60%] mt-9  p-12 rounded-xl flex flex-col items-center hover:scale-95 shadow-2xl cursor-pointer">
                <img src={item.image} alt="" />
                <span className='font-semibold text-lg'>{item.name}</span>
            </div>
        ))
      }
    </div>
     <h1 className='text-5xl font-semibold px-5 text-center py-5'>Trending Products</h1>
       <div className="product-section flex flex-wrap gap-6 items-center justify-center py-8">
        {
            cate.slice(0,7).map((item)=>(
                <Product name={item.name} id={item.id} price={item.price} image={item.image} />
            ))
        }
       </div>
    </div>
  )
}

export default Home
