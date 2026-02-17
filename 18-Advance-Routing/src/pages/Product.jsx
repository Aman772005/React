import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <div className='flex  items-center justify-center gap-4 font-bold p-3 '>
       <Link to={'men'}>Men</Link> 
       <Link to={'women'}>Women</Link>
       <Link to={'kids'}>Kids</Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default Contact
