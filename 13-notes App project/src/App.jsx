import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [detail , setDetail] = useState('')

  const form = (e) => {
    e.preventDefault()
    console.log("this is heading : ",title)
    console.log("this is notes : ",detail)
  }

  return (
    <div className='h-screen bg-black text-white'>

      <form onSubmit={(e) => {
        form(e)
      }} className="flex flex-col p-10 gap-5">
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          type='text'
          placeholder='Heading'
          className='border-2 rounded py-2 px-5'
        />
        <textarea
          placeholder='Enter notes'
          name=""
          id=""
          className='border-2 rounded h-20 px-5 py-2'
          value={detail}
          onChange={(e)=>{
            setDetail(e.target.value)
          }}
          >
        </textarea>
        <button className='bg-white text-black px-5 py-2 rounded'>Add Notes</button>
      </form>
    </div>
  )
}

export default App
