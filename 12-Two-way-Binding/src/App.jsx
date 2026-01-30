import React, { useState } from 'react'

const App = () => {

  const[title,setTitle] = useState('')

  const formhandling = (e) =>{
    e.preventDefault()
    console.log("formsubmitted by",title)
    setTitle('')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        formhandling(e)
      }}>
        <input 
        type="text"
        placeholder='Name'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        /> 
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
