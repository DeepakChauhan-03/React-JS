import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Check({children}){
    const isAuthenticated = false;
    const navigate = useNavigate();

    useEffect(()=>{
       if(!isAuthenticated){
        navigate("/login")
       }
       else{
        navigate("/home")
       }
    },[])

    return children
}

export default Check;