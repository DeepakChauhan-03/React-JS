import React, { createContext, useState } from 'react'
import { food_items } from '../food';
//creating an context
export const dataContext = createContext();

const UserContext = ({children}) => {

      let [Cate,setCate] = useState(food_items)
    let [input,setInput] = useState("")
    let [showCart,setshowCart] = useState(false);
let data = {
     input,
     setInput,
     Cate,
     setCate,
     showCart,
     setshowCart
}
  return (
    <div>
        <dataContext.Provider value={data}>
            {children}
        </dataContext.Provider>
    </div>
  )
}

export default UserContext
