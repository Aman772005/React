import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card';

const App = () => {

  const [userdata, setUserData] = useState([]);
  const [Index, setIndex] = useState(1);

  const getdata = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${Index}&limit=10`);

    setUserData(response.data);
  }

  useEffect(function () {
    getdata()
  }, [Index])

  let printuserdata = <h3 className='text-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>Loading....</h3>
  if (userdata.length > 0) {
    printuserdata = userdata.map((elem, idx) => {
      return <div key={idx}>
        <Card elem = {elem}/>
      </div>
    })
  }

  return (
    <div className='bg-black h-screen text-white overflow-auto'>
      {/* <button onClick={getdata}>Get Data</button> */}
      <div className='flex flex-wrap gap-4 '>
        {printuserdata}
      </div>
      <div className='flex justify-self-center gap-5 p-5'>
        <button
          onClick={() => {
            if (Index > 1) {
              setUserData([])
              setIndex(Index - 1);
            }
          }}
          className='bg-amber-200 px-2 py-1 rounded-xl text-black font-bold cursor-pointer'>
          Prev
        </button>
        <h4>Page {Index}</h4>
        <button
          onClick={() => {
            setUserData([])
            setIndex(Index + 1)
          }}
          className='bg-amber-200 px-2 py-1 rounded-xl text-black font-bold cursor-pointer'>
          Next
        </button>
      </div>
    </div>
  )
}

export default App
