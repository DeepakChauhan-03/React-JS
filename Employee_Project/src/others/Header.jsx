import React from 'react'

const Header = ({data}) => {
  console.log(data)
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl'>Hello <br /> <span className='font-medium text-3xl'>{data.firstName}</span> </h1>
      <button className='px-5 py-2 bg-red-500 text-white rounded text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header
