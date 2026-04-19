import React from "react";
import { Category } from "../Category";
import { dummydata } from "../Dummy";
import { useState } from "react";
import Product from "../components/Product";

const Shop = () => {
  let [cate, setCate] = useState(dummydata);
  function filterProducts(category) {
    if(category==="All"){
        setCate(dummydata)
    }
   else{
     const updatedData = dummydata.filter((item) => item.category === category);
      setCate(updatedData);
   }
  }
  return (
    <div className="pt-5 flex flex-col justify-center items-center">
        <h1 className="text-6xl font-semibold ">Shop</h1>
      <div className="category flex w-full px-20 gap-7  ">
        {Category.map((item) => (
          <div
            onClick={() => filterProducts(item.name)}
            className="card w-full h-[60%] mt-9  p-12 rounded-xl flex flex-col items-center hover:scale-95 shadow-2xl cursor-pointer"
          >
            <img src={item.image} alt="" />
            <span className="font-semibold text-lg">{item.name}</span>
          </div>
        ))}
      </div>

      <div className="product-section flex flex-wrap gap-6 items-center justify-center py-8">
        {cate.map((item) => (
          <Product
            name={item.name}
            id={item.id}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
