import React, { useState } from 'react'

const App = () => {
 
  const [title,setTitle] = useState('');
  const[details,setDetails] = useState('');
  const[task,setTask] = useState([]);

 const submitHandler = (e)=>{
   e.preventDefault()
   console.log(title,details);

   const copyTask = [...task];
   copyTask.push({title,details});
   setTask(copyTask);

   setTitle("");
   setDetails("");
 }

 const deleteNote = (idx)=>{
   const copyTask = [...task]
    copyTask.splice(idx,1);
    setTask(copyTask)
 }

  return (
    <div className='h-screen  bg-gray-900  p-9 flex'>
        <form onSubmit={(e)=>{
        submitHandler(e);
      }} className='flex flex-col gap-6 h-full w-1/2'>

      {/* Input title */}
         <input type="text" 
         placeholder='Enter Notes Heading'
         className='h-[60px] w-3/4 text-xl font-medium text-white p-6 border-2 border-white rounded-xl outline-none'
         value={title}
         onChange={(e)=>{
             setTitle(e.target.value)
         }}
          />

         {/* Input Details  */}
         <textarea type="text" 
         placeholder='Write Details'
         className='h-[190px] w-3/4 p-4 text-white font-medium text-xl border-2 border-white rounded-xl outline-none'
         value={details}
         onChange={(e)=>{
          setDetails(e.target.value)
         }}
          />

          <button className='bg-white text-black font-medium px-3 py-4 w-3/4 rounded-xl text-xl active:bg-gray-500'><h3>Add Note</h3></button>
      </form>
      <div className='h-full w-1/2 bg-gray-700 overflow-auto p-7'>
        <h1 className='text-4xl font-bold text-white'>Your Notes</h1>
        <div className='h-full flex gap-6 flex-wrap mt-5'>
          {
             task.map(function(elem,idx){
               return  <div key={idx} className='h-[250px] w-[30%] flex flex-col justify-between p-5 bg-cover wrap-break-word rounded-xl text-black bg-[url(https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png)]'>
                <div>
                <h3 className='text-xl font-bold leading-tight'>{elem.title}</h3>
                <h4 className='leading-tight mt-2 font-medium  text-gray-600'>{elem.details}</h4>
                </div>
                <div className='bg-red-500 cursor-pointer active:scale-95 h-8 rounded-xl flex items-center justify-center font-medium text-white'>
                  <button onClick={()=>{
                    deleteNote(idx)
                  }}>Delete</button>
                </div>
               </div>
             })
          }
          
        </div>
      </div>
    </div>
  )
}

export default App
