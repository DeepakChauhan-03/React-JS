import React, { useState } from 'react'
import Login from './Login';
import Signup from './Signup';

const Authform = () => {
  const [isLogin, setIsLogin] = useState("login");
  return (
    <div className='h-screen w-full bg-blue-400 flex items-center justify-center'>
      <div className="form h-130 w-100 bg-white rounded py-3">
          <div className="formtoggle flex justify-center gap-8 my-2">
            <button
            onClick={()=> setIsLogin("login")}
             className= {`px-9 py-1  rounded-xl ${isLogin === "login" ? "bg-blue-700 text-white" : "bg-gray-500 text-black"}`}
             >Login</button>
            <button
            onClick={()=> setIsLogin("Signup")}
            className={`px-9 py-2 rounded-xl ${isLogin === "Signup" ? "bg-blue-700 text-white" : "bg-gray-500 text-black"}` }>SignUp</button>

          </div>
          {
            isLogin === "login" ? <Login /> : isLogin === "Signup"? <Signup /> : ""
          }
          
      </div>
    </div>
  )
}

export default Authform
