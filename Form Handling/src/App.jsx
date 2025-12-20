import React, { useState } from 'react'
import './App.css';
import Checkbox from './Components/Checkbox';
import ArrayLoop from './Components/ArrayLoop';
import User from './Components/User';

const App = () => {
  const [val,setValue] = useState('');
  const [email,setEmail] =useState('');
  const [pass,setPassword] = useState('');
  return (
    <div className='Card'>
     <h1>Form Handling</h1>
     {/* <input type="text"
     value={val}
      onChange={(e) => {setValue(e.target.value)}} 
      placeholder='Enter your name' /> <br />

     <input type="text"
     value={email}
     onChange={(e) =>{setEmail(e.target.value)}}
      placeholder='Enter e-mail' /> <br />

     <input type="text"
     value={pass}
     onChange={(e)=>{setPassword(e.target.value)}}
      placeholder='Enter Password' />
     <button onClick={() => {
        setValue("");
        setEmail("");
        setPassword("")}}>Submit</button>
     <h2>{val}</h2>
     <h2>{email}</h2>
     <h2>{pass}</h2> */}

     {/* Check box */}
     <ArrayLoop/>
    </div>
  )
}

export default App;
