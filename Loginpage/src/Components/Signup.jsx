import React, { useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const userDetail = {
        name:"",
        email:"",
        password:""
    }
    
    const [data, setData] = useState(userDetail)
   
     const handleInput = (event)=>{
        //  console.log(event.target.value)
         const name = event.target.name;
         const value = event.target.value;

         setData({...data, [name]:value})
     }
        //Navigate
        const navigate = useNavigate();
          
     const handleSubmit = (event)=>{
        event.preventDefault();
        if(data.name == "" || data.email =="" || data.password ==""){
            alert("Please enter the details")
        }
        else{
            const getData = JSON.parse(localStorage.getItem("user") || "[]")
            let arr =[];
            arr = [...getData];
            arr.push(data)

         localStorage.setItem("user",JSON.stringify(arr))
         navigate("/login")
         alert("SignUp successfully")
        }
     }
  return (
    <div>
        <Navbar/>
        <div className='px-20 flex gap-25 justify-around items-center'>
     <form action="" onSubmit={handleSubmit}>
      <div className="input flex flex-col gap-5 py-7">
         <h1 className='text-4xl font-semibold '>Sign Up</h1>
         
        <input 
        name='name'
        onChange={handleInput}
        className='h-10 w-80 border-2 px-3 text-xl font-semibold rounded'
        type="text" placeholder='Enter your name' />

        <input 
        onChange={handleInput}
        name='email'
        className='h-10 w-80 border-2 px-3 text-xl font-semibold rounded'
        type="email" placeholder='Enter your email'/>

        <input 
        onChange={handleInput}
        name='password'
        className='h-10 w-80 border-2 px-3 text-xl font-semibold rounded'
        type="password" placeholder='Enter your password'/>

        <div className="btn">
        <p>Already have an account? <a href="/login" className='text-blue-500'>Login</a></p>
      <button className='px-10 py-2 bg-green-600 text-white rounded text-xl my-7'>SignUp</button>
        </div>
      </div>
      </form>

      <div className="img w-[43%]">
        <img 
        className=''
        src="https://plus.unsplash.com/premium_vector-1682303071823-921c93af6aa2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
    </div>
    </div>
  )
}

export default Signup
