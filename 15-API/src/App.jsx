import axios from 'axios'
import { useState } from 'react'

const App = () => {

  // by using fetch
  // async function getdata() {
  //   const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')

  //   const response = await data.json()

  //   console.log(response);
    
  // }

  const [data , setData] = useState([])

  const getData = async () =>{
    const response = await axios.get('https://picsum.photos/v2/list')

    setData(response.data);
    
  }

  return (
    <div>
      <button onClick={getData}>GET DATA</button>
      <div>
        {data.map(function(elem,idx){
          return <h3>Hello,{elem.author},{idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App
