import React from 'react'
import Rightcardcontent from './Rightcardcontent'

const Rightcard = ({users,idx}) => {

  return (
    <div className='h-full w-[30%] bg-red-500 rounded-4xl relative'>
      <img className='h-full w-full object-cover rounded-4xl' src={users.img} />
      <Rightcardcontent users={users} idx={idx} />
    </div>
  )
}

export default Rightcard
