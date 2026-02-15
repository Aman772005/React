import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
        <h3>Aman</h3>
      <div className='link'>
      <Link className = ' link ' to={'/'}>Home</Link>
      <Link className = ' link ' to={'/about'}>About</Link>
      <Link className = ' link ' to={'/contact'}>Contact</Link>
       </div>
    </div> 
  )
}

export default Navbar
