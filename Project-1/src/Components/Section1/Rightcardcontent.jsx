import React from 'react'

const Rightcardcontent = ({users,idx}) => {
  return (
    <div className='h-full w-full absolute top-0 left-0 p-8 flex flex-col justify-between '>
      <h2 className='h-14 w-14 bg-white rounded-full flex justify-center items-center text-2xl font-bold'>{idx+1}</h2>
      <div>
         <p className='pb-5 text-white text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, earum natus. Magnam repudiandae nisi dolor.</p>
      <div className='flex justify-between'>
        <button className='text-white bg-blue-600 font-medium px-8 py-3 rounded-full '>{users.tag}</button>
        <button className='text-white bg-blue-600 rounded-full px-4 py-3 font-medium'><i class="ri-arrow-right-line"></i></button>
      </div>
      </div>
    </div>
  )
}

export default Rightcardcontent
