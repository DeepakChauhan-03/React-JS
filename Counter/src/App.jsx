import { useState } from 'react'

function App() {
  const [count, setCount] = useState(2)
  // const increase = ()=>{
  //   setCount(count+1)
  // }
  function increase(){
    setCount(count+1)
  }
  return (
    <div>
      <div className='h-screen w-full bg-gray-800 flex flex-col gap-10 justify-center items-center'>
        <h1 className='text-6xl text-white flex justify-center'>Counter</h1>
        <h2 className='bg-white h-[70px] w-[100px] flex justify-center text-7xl'>{count}</h2>
        <div className='flex gap-6'>
          <button className='bg-white h-[40px] w-[130px]' onClick={increase}>Increment</button>
          <button className='bg-white h-[40px] w-[130px]' onClick={()=>{setCount(count-1)}}>Decrement</button>
        </div>
      </div>
    </div>
  )
}

export default App
