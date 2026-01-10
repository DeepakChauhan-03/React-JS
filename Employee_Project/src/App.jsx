import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  //calling getlocalstorage
  useEffect(()=>{
       setLocalStorage();
       getLocalStorage();
  },[])

  const [user,setUser] = useState(null);
  const[loggedInUserData,setloggedInUserData] = useState(null);
   //Context API
  const authData = useContext(AuthContext)

  // useEffect(()=>{
  //     if(authData){
  //       const loggedInUser = localStorage.getItem('loggedInUser');
  //       if(loggedInUser){
  //         setUser(loggedInUser.role)
  //       }
  //     }
  // },[authData])


  const  handelLogin = (email,password)=>{
       if(email == 'admin@me.com'  && password == '123'){  //Admin
        console.log("This is admin");
        setUser('admin')
        localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
       }
       else if(authData){   //emPLOYEE
        const employee = authData.employees.find((e)=> email ==e.email && password == e.password);
         if(employee){
          setUser('employee')
          setloggedInUserData(employee)
          localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
         }
       }
       else{
            alert("Invalid credentials")
       }
  }

  return (
    <div>
      {
        !user? <Login handelLogin={handelLogin}/> : " "
      }
       {
        user == 'admin' ? <AdminDashboard /> : (user == 'employee' ? <EmployeeDashboard data={loggedInUserData}/> :null) 
       }
    </div>
  )
}

export default App
