import React from 'react'
import Navbar2 from './Navbar2'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'


const Navbar = () => {

  const [theme,setTheme] = useContext(ThemeDataContext);

    
  return (
    <div>
      {theme}
      <Navbar2  />
    </div>
  )
}

export default Navbar
