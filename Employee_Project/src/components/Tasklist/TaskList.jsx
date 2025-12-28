import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="overflow-x-auto h-[55%] w-full py-5 mt-10 flex items-center justify-start gap-5 flex-nowrap"
    >
      <div className="shrink-0 h-full w-1/4 bg-red-400 rounded-xl ">
        <div className="flex  items-center justify-around mt-5 gap-5">
          <h2 className="px-4 py-2 bg-red-600 rounded font-semibold">High</h2>
          <h4>28 December 2025</h4>
        </div>
        <div className="flex flex-col mt-5 ">
        <h2 className="font-semibold text-2xl px-9">Make a React Project</h2>
        <p className="tracking-tight px-9 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          dolorum reprehenderit omnis deleniti, ipsa excepturi commodi obcaecati
          totam facere ea!
        </p>
        </div>
      </div>
       <div className="shrink-0 h-full w-1/4 bg-green-400 rounded-xl ">
        <div className="flex  items-center justify-around mt-5 gap-5">
          <h2 className="px-4 py-2 bg-red-600 rounded font-semibold">High</h2>
          <h4>28 December 2025</h4>
        </div>
        <div className="flex flex-col mt-5 ">
        <h2 className="font-semibold text-2xl px-9">Make a React Project</h2>
        <p className="tracking-tight px-9 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          dolorum reprehenderit omnis deleniti, ipsa excepturi commodi obcaecati
          totam facere ea!
        </p>
        </div>
      </div>

       <div className="shrink-0 h-full w-1/4 bg-blue-400 rounded-xl ">
        <div className="flex  items-center justify-around mt-5 gap-5">
          <h2 className="px-4 py-2 bg-red-600 rounded font-semibold">High</h2>
          <h4>28 December 2025</h4>
        </div>
        <div className="flex flex-col mt-5 ">
        <h2 className="font-semibold text-2xl px-9">Make a React Project</h2>
        <p className="tracking-tight px-9 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          dolorum reprehenderit omnis deleniti, ipsa excepturi commodi obcaecati
          totam facere ea!
        </p>
        </div>
      </div>

       <div className="shrink-0 h-full w-1/4 bg-yellow-400 rounded-xl ">
        <div className="flex  items-center justify-around mt-5 gap-5">
          <h2 className="px-4 py-2 bg-red-600 rounded font-semibold">High</h2>
          <h4>28 December 2025</h4>
        </div>
        <div className="flex flex-col mt-5 ">
        <h2 className="font-semibold text-2xl px-9">Make a React Project</h2>
        <p className="tracking-tight px-9 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          dolorum reprehenderit omnis deleniti, ipsa excepturi commodi obcaecati
          totam facere ea!
        </p>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
