import React from 'react'
import Nav from '../components/Nav'
import Categories from '../Categories'

const Home = () => {
  return (
    <div className='bg-slate-200'>
      <Nav />
      <div className='flex flex-wrap gap-5 items-center justify-center p-8 w-full '>
        {
          Categories.map((item)=>{
              return <div className='h-35 w-35 bg-white flex flex-col items-center
               justify-center gap-4 text-2xl font-semibold cursor-pointer
                text-gray-600 shadow-2xl rounded-lg hover:bg-green-200 transition-all duration-200'>
                {item.icon}
                {item.name}
              </div>
          })
        }
      </div>
    </div>
  )
}

export default Home
