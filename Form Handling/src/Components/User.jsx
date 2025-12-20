import React from 'react'

const User = ({data}) => {
  return (
    <div>
      <h2>Name: {data.name}</h2>
      <h2>Age: {data.age}</h2>
      <h2>E-mail: {data.email}</h2>
    </div>
  )
}

export default User
