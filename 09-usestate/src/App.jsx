// import { useState, useSyncExternalStore } from "react"


// const App = () => {

//     const [Age,SetAge] = useState(20)
//     const [Name,SetName] = useState('Aman Singh Tomar')


//     function change(){
//       SetAge(22) 
//       SetName('Sachin Singh Tomar')
//     }


//   return (
 

//     <div>

//       <h1>Hii , I am {Name} and My age is {Age}</h1>
//       <button onClick={change}>Click here</button>

//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {
  const [a,Seta] = useState(0)
  const [b,Setb] = useState(0)
  const [c,Setc] = useState(0)

  function Increase(){
    Seta(a+1)
  }
    function Decrease(){
    Seta(a-1)
  }
    function Increaseby5(){
    Seta(a+5)
  }

  return (
    <div className='Div'>
      <h1>{a}</h1>
      <div className="btn">
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
      <button onClick={Increaseby5}>Increase by 5</button>
      </div> 
    </div>
  )
}

export default App
