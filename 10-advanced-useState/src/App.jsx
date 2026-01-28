// import React, { useState } from 'react'

// const App = () => {
//   const [Age , SetAge] = useState(20)
//   const Agechange = () => {
//     console.log(Age)
//     SetAge(Age+1)
//     console.log(Age)
//   }
//   return (
//     <div>
//       <h1 >Name : Aman Singh Tomar </h1>
//       <h1>Age:{Age}</h1>
//       <button onClick={Agechange}>Click</button>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//   const [num,setnum] = useState({user:'Aman',age:20})

//   const btnclicked = () =>{
//     const newnum ={...num};
//     newnum.user ='Amit'
//     newnum.age = '21'
//     setnum(newnum)
//   }
//   return (
//     <div>
//       <h1>{num.user},{num.age}</h1>
//       <button onClick={btnclicked}>click</button>
//     </div>
//   )
// }

// export default App
// import React, { useState } from 'react'

// const App = () => {
//   const [num , setnum] = useState([10,20,30])
//   const numchange =()=>{
//     const newnum = [...num]
//     newnum.push(99)
//     setnum(newnum)
//   }
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={numchange}>click</button>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//   const [num,setnum]=useState({user:"aman",age:20})

//   const btnclicked =() =>{
//     setnum(prev=>({...prev,user:"Amit",age:21}))
//   }
//   return (
//     <div>
//       <h1>{num.user},{num.age}</h1>
//       <button onClick={btnclicked}>click</button>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {
  const[num,setnum]=useState(20)
  const change = () =>{
    setnum(prev => (prev+1))
     setnum(prev => (prev+1))
      setnum(prev => (prev+1))
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={change}>click</button>
    </div>
  )
}

export default App




