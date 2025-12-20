import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
         <nav>
          <h1>React Router</h1>
          <div className='a'>
           <Link to='/'>Home</Link>
           <Link to='/about'>About</Link>
           <Link to='/contact'>Contact</Link>
          </div>
       </nav>
    </div>
  )
}

export default Nav
