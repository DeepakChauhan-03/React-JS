import React from 'react'
import Left from './Left'
import Right from './right'

const Content1 = ({users}) => {
  return (
    <div className='h-[90vh] w-screen flex px-12 py-8 gap-10'>
     <Left />
     <Right users={users}/>
    </div>
  )
}

export default Content1
