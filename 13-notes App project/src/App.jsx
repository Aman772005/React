import React, { useState } from 'react'

const App = () => {
  const word = () =>{
    const[title,setTitle]= useState('')
    setTitle('aman')
  }
  const form = (e) =>{
    e.preventDefault()
    console.log("form not reload")
  }
  return (
    <div className='h-screen bg-black text-white'> 

      <form onSubmit={(e)=>{
        form(e)
      }} className="flex flex-col p-10 gap-5">
        <input 
        onChange={word}
        type='text'
        placeholder='Heading'
        className='border-2 rounded py-2 px-5'
        />
        <textarea 
        placeholder='Enter notes' 
        name="" 
        id=""
        className='border-2 rounded h-20 px-5 py-2'>
        </textarea>
        <button className='bg-white text-black px-5 py-2 rounded'>Add Notes</button>
      </form>
    </div>
  )
}

export default App
