import { useState } from 'react'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'

function App() {

  const users = [
    {
     img:"https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     intro:"",
     tag:"Satisfied"
  },
   {
     img:"https://images.unsplash.com/photo-1618355776464-8666794d2520?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     intro:"",
     tag:"Underserved"
  },
   {
     img:"https://images.unsplash.com/photo-1517256673644-36ad11246d21?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     intro:"",
     tag:"Underbanked"
  },
];
  return (
   <div>
    <Section1 users={users}/>
    <Section2 />
   </div>
  )
}

export default App
