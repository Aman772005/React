import React, { useEffect, useState } from 'react'

const App = () => {
  const [a,setA] = useState(0)
  const [b,setB] = useState(0)
  
  function Achange() {
    console.log("A is changed")
  }

   function Bchange() {
    console.log("B is changed")
  }

  useEffect(function(){
    
    Achange()
    
  },[a])


  return (
    <div>
      <h1>A : {a}</h1>
      <h1>B : {b}</h1>
      <button onClick={()=>{
        setA(a+1)
      }}>Change A</button>
      <button onClick={()=>{
        setB(b-1)
      }}>Change B</button>
    </div>
  )
}

export default App
