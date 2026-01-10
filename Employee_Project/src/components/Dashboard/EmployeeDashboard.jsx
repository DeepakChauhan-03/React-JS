import React from 'react'
import Header from '../../others/Header'
import TaskListNumbers from '../../others/TaskListNumbers'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboard = ({data}) => {

  return (
    <div className='p-12 bg-[#1C1C1C] h-screen '>
      <Header data={data}/>
      <TaskListNumbers data={data}/>
      <TaskList data={data} />
    </div>
  )
}

export default EmployeeDashboard
