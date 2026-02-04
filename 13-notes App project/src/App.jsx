import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')

  const [task, setTask] = useState([])

  const form = (e) => {
    e.preventDefault()

    const copyTask = [...task];

    copyTask.push({ title, detail })

    setTask(copyTask)
    



    setTitle('')
    setDetail('')
  }

  const notedelete = (idx) =>{
     const copyTask = [...task];
     copyTask.splice(idx,1)
     setTask(copyTask)
    
  }

  return (
    <div className='h-screen bg-black text-white '>

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
          onChange={(e) => {
            setDetail(e.target.value)
          }}
        >
        </textarea>
        <button className='bg-white text-black px-5 py-2 rounded'>Add Notes</button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10 flex align-middle gap-5'>

        {task.map(function (elem, idx) {
          return <div key={idx} className='h-50 w-40 bg-white text-black rounded-2xl '>
            <h1>{elem.title}</h1>
            <p>{elem.detail}</p>
            <button onClick={()=>{
              notedelete(idx)
              }}>Delete</button>
          </div>
        })}
      </div>
    </div>
  )
}

export default App
