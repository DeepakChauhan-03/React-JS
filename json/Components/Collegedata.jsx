import React from 'react'

const Collegedata = ({data}) => {
  return (
    <div>
       <h2>Name: {data.Name}</h2>
             <ul>
              <li><h3>Age : {data.age}</h3></li>
              <li><h3>E-mail : {data.email}</h3></li>
             </ul>
              <hr />
    </div>
  )
}

export default Collegedata;
