import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Redux/Slice';

const App = () => {

  const count = useSelector((state)=> state.count.value)

  const dispatch = useDispatch();
  return (
    <div className='h-screen w-full flex justify-center py-20 bg-gray-900 '>
      <div className='h-130 w-110 rounded-xl bg-gray-300 flex flex-col justify-around items-center '>
        <h1 className='text-5xl' >{count}</h1>
        <div className="btn flex gap-8">
          <button
          onClick={()=> dispatch(increment(1))}
          className='px-5 py-2 rounded bg-green-600 text-white'>Increment +</button>
          <button
          onClick={()=> dispatch(decrement(1))}
          className='px-5 py-2 rounded bg-green-600 text-white'>Decrement -</button>
        </div>
      </div>
    </div>
  )
}

export default App
