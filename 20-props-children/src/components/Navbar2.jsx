import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'




const Navbar2 = (props) => {

  const [theme,setTheme] = useContext(ThemeDataContext)

  function changeTheme(){
    setTheme('white')
  }



  return (
    <div>
      <h3>hii1</h3>
      <h3>hii2</h3>
      <h3>hii3</h3>
      <h3>hii4</h3>
      <h3>{theme}</h3>
      <button onClick={changeTheme}>click</button>
      
    </div>
  )
}

export default Navbar2
