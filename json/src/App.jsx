import { useState } from 'react'
import './App.css'
import Collegedata from '../Components/Collegedata';

function App() {
  const college = [
    {
      Name:"Deepak",
      age:"21",
      email:"deepak@gmail.com"
    },
     {
      Name:"Amit",
      age:"20",
      email:"amit@gmail.com"
    },
     {
      Name:"Rahul",
      age:"24",
      email:"rahul123@gmail.com"
    },
     {
      Name:"Shivam",
      age:"22",
      email:"shivam8796@gmail.com"
    }
  ];

  return (
    <>
      <h1>Nested Looping</h1>
      {
        college.map((college, idx) => {
          return (
            <div key={idx}>
             <Collegedata data = {college}/>
            </div>
          )
        })
      }
    
    </>
  )
}

export default App
