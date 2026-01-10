import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='mt-10 screen flex gap-9'>
      <div className=' w-[45%] bg-blue-400 px-9 py-6 rounded-xl'>
          <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
          <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className=' w-[45%] bg-green-400 px-9 py-6 rounded-xl'>
          <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
          <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>
      <div className=' w-[45%] bg-yellow-400 px-9 py-6 rounded-xl text-black'>
          <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
          <h3 className='text-xl font-medium'>Accepted Task</h3>
      </div>
      <div className=' w-[45%] bg-red-400 px-9 py-6 rounded-xl'>
          <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
          <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
