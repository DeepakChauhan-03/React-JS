import React from 'react'

const Checkbox = () => {
  return (
    <div>
      <h2>Checkbox</h2>
     <input type="checkbox" id='html' value="html"/>
     <label htmlFor="html">HTML</label>
     <br />
    <br />
     <input type="checkbox" id='css' value="css"/>
     <label htmlFor="css">CSS</label>
     <br />
     <br />
      <input type="checkbox" id='js' value="js"/>
     <label htmlFor="js">JavaScript</label>
    </div>
  )
}

export default Checkbox;
