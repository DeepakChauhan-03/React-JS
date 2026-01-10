import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/features/counter';

const App = () => {
const selector = useSelector((state)=>state.counter.value)

const dispatch = useDispatch();

  return (
    <div>
    <h1>{selector}</h1>
    <button onClick={()=> dispatch(increment(1))}>Increment</button>
    <button onClick={()=> dispatch(decrement(1))} >Decrement</button>
    </div>
  )
}

export default App
