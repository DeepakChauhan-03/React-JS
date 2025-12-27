import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate();
    
    const handleInput = (event) =>{
        const value = event.target.value;
        const name = event.target.name;
        if("email"== name){
            setEmail(value)
        }
        if("password" == name){
            setPassword(value)
        }
    }

    const handleSubmit = (event)=>{
     event.preventDefault();
     //empty fields
     if(email == "" || password ==""){
      alert("Please enter your details")
     }
     else{
      const getDetails = JSON.parse(localStorage.getItem("user"))
      getDetails.map((currentval)=>{
      let storeEmail = currentval.email;
      let storePassword = currentval.password;
      if(storeEmail == email && storePassword == password){
          navigate("/home")
          alert("login successfully")
      }
      else{
         alert("Invalid email or password")
      }
     })
     }
    }

  return (
    <div>
      <Navbar />
      
     <form 
     onSubmit={handleSubmit}
     action="">
         <div className="px-20 flex gap-25 justify-around items-center">
        <div className="input flex flex-col gap-5 py-7">
          <h1 className="text-4xl font-semibold ">Login</h1>

          <input
          onChange={handleInput}
            name="email"
            className="h-10 w-80 border-2 px-3 text-xl font-semibold rounded"
            type="email"
            placeholder="Enter your email"
          />

          <input
          onChange={handleInput}
            name="password"
            className="h-10 w-80 border-2 px-3 text-xl font-semibold rounded"
            type="password"
            placeholder="Enter your password"
          />

          <div className="btn">
            <p>
              Create an account?{" "}
              <a href="/" className="text-blue-500">
                SignUp
              </a>
            </p>
            <button className="px-10 py-2 bg-green-600 text-white rounded text-xl my-7">
              Login
            </button>
          </div>
        </div>
        <div className="img w-[43%]">
          <img
            className=""
            src="https://plus.unsplash.com/premium_vector-1682303071823-921c93af6aa2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
     </form>
    </div>
  );
};

export default Login;
