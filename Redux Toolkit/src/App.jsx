import React from "react";
import Header from "./Components/Header";
import Product from "./Components/Product";
import { useDispatch } from "react-redux";
import { clearAllItems } from "./Redux/Slice";

const App = () => {
 const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <h1 className="font-bold text-5xl">Redux Toolkit</h1>
      <Product />
    </div>
  );
};

export default App;
