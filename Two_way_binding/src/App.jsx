import { useState } from 'react'


function App() {
  const [title, setTitle] = useState('');

  const submitHandler = (elm)=>{
    elm.preventDefault();
    console.log("submit");
    setTitle(" ")
  }

  return (
    <div>
      <div>
        <h1>Two way binding</h1>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <input type="text"
          value={title}
          onChange={(event)=>{
            setTitle(event.target.value)
          }}
          placeholder='Enter your name...'/>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default App
