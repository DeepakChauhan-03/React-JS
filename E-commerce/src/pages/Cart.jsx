import React from 'react'
import Cartcard from '../components/Cartcard'
import { useSelector } from 'react-redux'
import EmptyCart from '../components/EmptyCart'

const Cart = () => {
  let items = useSelector(state => state)
  //total price
  let total = items.cart.reduce((a,b)=>a+b.price,0)
  return (
    <div>
      {
        items.cart.length<=0 ? <EmptyCart /> :

        <div className="cart-section">
          {
            items.cart.map((item)=>(
               <Cartcard name={item.name}  image={item.image} price={item.price} id={item.id} />
            ))
          }

          <div className="price-section text-2xl font-semibold flex gap-7 items-center justify-center">
            <span>Total Products : {items.cart.length}</span>
            <span>Total Price : {total}</span>
          </div>
        </div>
        
      }
    </div>
  )
}

export default Cart
