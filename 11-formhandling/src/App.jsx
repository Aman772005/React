import React from 'react'

const App = () => {
  const formhandling = (e) =>{
    e.preventDefault()
    console.log("formsubmitted")
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        formhandling(e)
      }}>
        <input type="text" placeholder='Name'/> 
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
