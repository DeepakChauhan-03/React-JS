import React, { useState } from "react";

const Login = () => {
  //usestate to store email and password by two way binding
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');

  //Form submit handler
  const submitHandler = (e)=>{
    e.preventDefault();
    console.log("email is :", email)

    setEmail("");
    setPassword("");
  }

  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center">
      <div className="card h-100 w-100 border-2 border-emerald-600 rounded-2xl flex flex-col items-center justify-center ">
       <form action=""
       onSubmit={(e)=> submitHandler(e)}
       className="flex flex-col gap-6 
      items-center justify-center"
       >
         <input required
         value={email}
         onChange={(e)=> setEmail(e.target.value)}
        className="outline-none border-2 border-emerald-600 font-xl px-9 py-3 text-gray-400 text-xl rounded-full"
        type="email" placeholder="Enter your e-mail" />

        <input  required
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        className="outline-none border-2 border-emerald-600 font-xl px-9 py-3 text-xl text-gray-400 rounded-full"
        type="text" placeholder="Enter your Password" />

        <button className="px-30 py-3 text-xl mt-5 font-semibold bg-emerald-600 text-white rounded-full
        hover:bg-emerald-700 ">Log in</button>
       </form>
      </div>
    </div>
  );
};

export default Login;
