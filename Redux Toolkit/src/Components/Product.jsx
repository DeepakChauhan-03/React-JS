import React, { useEffect } from "react";
import AddToCart from "./AddToCart";
import { addItem, removeItems } from "../Redux/Slice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/productSlice";

const Product = () => {
  //Hook
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const ProductSelector = useSelector((state) => state.products.items);
  console.log(ProductSelector);

  const cartSelector = useSelector((state) => state.cart.items)

  return (
    // Add to cart
    // <div className='h-120 w-230 rounded-xl mx-4 flex relative shadow-xl shadow-gray-300'>
    //   <div className="left w-[45%] h-full ">
    //     <img
    //     className='h-full w-full object-cover rounded-xl  '
    //     src="https://tse3.mm.bing.net/th/id/OIP.E2KzLGz3OADm2F2ssWuOOwHaE8?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
    //   </div>
    //   <div className="right w-[55%] h-full flex flex-col gap-5 py-10 px-2">
    //     <h1 className='text-4xl font-semibold'>Wireless Headphones</h1>
    //     <span className='text-red-500 font-semibold text-xl'>$129.99</span>
    //     <p className='tracking-tight '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque deleniti eveniet, totam cum quisquam impedit dolorem explicabo quas neque facilis.</p>
    //     <div className="btn flex gap-4 items-center">
    //         <button
    //         onClick={()=>dispatch(addItem(1))}
    //         className='px-4 py-2 bg-blue-600 rounded-xl font-semibold text-white'><h3>Add to Cart</h3></button>
    //         <button
    //         onClick={()=>dispatch(removeItems(1))}
    //         className='px-4 py-2 bg-red-600 rounded-xl font-semibold text-white'><h3>Remove From Cart</h3></button>
    //     </div>
    //   </div>
    // </div>

    //Creating cart items
    <div className="grid grid-cols-4 gap-3 py-3">
      {
      ProductSelector.map((item) => (
        <div key={item.id} className="card h-115 mx-7 px-6 relative w-90 rounded-xl shadow-xl shadow-gray-300">
          <img 
          className="h-70 w-full"
          src={item.thumbnail} alt="" />
          <div className="content relative flex flex-col gap-1">
              <div className="title text-xl font-bold">{item.title}</div>
              <div className="brand text-xl font-bold text-gray-500">{item.brand}</div>
              <div className="price text-green-600 text-xl">${item.price}</div>
              <div className="rating text-gray-400">{item.rating} star</div>
              {
                cartSelector.find(cartItem => cartItem.id === item.id) ?
                <button
              className=" h-10  bg-gray-500 rounded-xl font-semibold text-white">
                Remove from Cart
                </button> :

                <button
              onClick={()=> dispatch(addItem(item))}
              className=" h-10  bg-blue-600 rounded-xl font-semibold text-white">
                Add To Cart
                </button>
              }
          </div>
        </div>
      ))
      }
    </div>
  );
};

export default Product;
