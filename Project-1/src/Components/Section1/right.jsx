import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Rightcard from './Rightcard'
const right = ({users}) => {
  return (
    <div className='h-full w-3/4 flex gap-10'>
      {
        users.map(function(users,idx){
          return <Rightcard idx={idx} users={users}/>
        })
      }
      
    </div>
  )
}

export default right
