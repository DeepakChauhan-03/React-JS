import React from "react";
import User from "./User";
const ArrayLoop = () => {
  const arr = [
    {
      name: "Deepak",
      age: "21",
      email: "deepakgmail.com",
    },
    {
      name: "Rohit",
      age: "22",
      email: "rohitgmail.com",
    },
  ];
  return (
    <div>
      <h1>Array json data</h1>
      {arr.map((user) => {
        <User data = {user}/>
      })}
    </div>
  );
};

export default ArrayLoop;
