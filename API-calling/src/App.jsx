import { useState } from 'react'
import axios from 'axios'


function App() {
  // API calling through fetch
//  async function getData (){
//     const response = await fetch('https://fakestoreapi.com/products/1');
//     console.log(response);
//   }

// API calling through Axios
 const getData = async () =>{
    const response = await axios.get('https://fakestoreapi.com/products/1');
    console.log(response);
 }


  return (
    <>
      <h1>API calling</h1>
      <button onClick={getData}>Call</button>
    </>
  )
}

export default App
