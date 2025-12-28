import React from 'react'

const CreateTask = () => {
  return (
    <div className='bg-[#1C1C1C] w-full p-5 mt-7 rounded '>
      <form className='flex items-center justify-center'>
       <div className="left w-[50%]">
         <div className=' mb-4'>
            <h3 className='font-semibold text-gray-200 text-2xl '>Task Title</h3>
            <input className='border rounded h-10 w-4/5 px-4 outline-none mt-2 bg-transparent' type="text" placeholder='Make a UI design' />
         </div>
         <div className='mb-4'>
            <h3 className='font-semibold text-gray-200 text-2xl '>Date</h3>
            <input className='border rounded h-10 w-4/5 px-4 outline-none mt-2 bg-transparent' type="date" />
         </div>
         <div className='mb-4'>
            <h3 className='font-semibold text-gray-200 text-2xl '>Assign to</h3>
            <input className='border rounded h-10 w-4/5 px-4 outline-none mt-2 bg-transparent' type="text" placeholder='Employee Name' />
         </div>
         <div className='mb-4'>
            <h3 className='font-semibold text-gray-200 text-2xl '>Category</h3>
            <input className='border rounded h-10 w-4/5 px-4 outline-none mt-2 bg-transparent' type="text" placeholder='design,dev,etc...' />
         </div>
       </div>
       <div className="right w-[45%] flex flex-col">
          <h3 className='font-semibold text-gray-200 text-2xl mb-3'>Description</h3>
          <textarea placeholder='Enter description here..' rows={10} cols={40} className=' p-3 rounded border-1 mb-2' ></textarea>
          <button className='bg-emerald-400 text-white py-2 mt-2 rounded font-medium hover:bg-emerald-700 '>Create Task</button>
       </div>

      </form>
    </div>
  )
}

export default CreateTask
