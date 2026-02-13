import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userdata ,setUserData] = useState([]);

  const getdata = async () =>{
  const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=25');

  setUserData(response.data)
  console.log(response.data)
}

useEffect(function(){
  getdata()
},[])

let printuserdata = <h3 className='text-gray-400 '>No user avilable</h3>
if(userdata.length>0){
  printuserdata = userdata.map((elem,idx)=>{
    return <div>
      <a href={elem.url} target='_blank'>
        <div className='h-40 w-45 bg-white overflow-hidden rounded-xl'>
      <img className='h-full  w-full object-cover  ' src={elem.download_url}/>
    </div>
    <h2 className='font-bold text-lg'>{elem.author}</h2>
      </a>
    </div>
  })
}

  return (
    <div className='bg-black h-screen text-white overflow-auto'>
      {/* <button onClick={getdata}>Get Data</button> */}
      <div className='flex flex-wrap gap-4 '>
        {printuserdata}
      </div>
    </div>
  )
}

export default App
