import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='bg-green-400 text-white flex items-center justify-between p-3'>
        <div>Aman</div>
        <div className='flex items-center gap-5'>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/courses'}>Courses</Link>
            <Link to={'/Product'}>Product</Link>
        </div>
    </div>
  )
}

export default Navbar
