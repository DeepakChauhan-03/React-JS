import React from 'react'
import Navbar from './Navbar'
import Content1 from './Content1'

const Section1 = ({users}) => {
  return (
    <div className='h-screen w-full '>
      <Navbar />
      <Content1 users = {users}/>
    </div>
  )
}

export default Section1
