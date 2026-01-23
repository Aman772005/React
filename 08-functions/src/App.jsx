// import React from 'react'

// const App = () => {

//   // we can do this or 

//   // function clicked() {
//   //   console.log(" button clicked ");
    
//   // }

//   return (
//     // or we can write directly in side the elements 
//     <div>
//       <button onClick={function clicked(){console.log("Button is clicked")}}>click here</button>
//     </div>
//   )
// }

// export default App

// import React from 'react'

// const App = () => {
//   function change (val){
//     console.log(val)
//   }
//   return (

//     // when we call fuction from inside the element then it call it self for preventing that we make a function inside the elem to call functions 
//     <div>

//       <input 
//       onChange={function(elem){
//         change(elem.target.value)
//       }} 
//       type="text" 
//       placeholder='Name' 
//       />


//       {/* <input 
//       onChange={function clicked(elem){
//         console.log(elem.target.value)
//       }} 
//       type="text"
//       placeholder='Name'
//       /> */}


//     </div>
//   )
// }

// export default App

// import React from 'react'

// const App = () => {
//   return (
//     <div className='box' 
//     onMouseMove={function move(elem){
//       console.log(elem.pageX,elem.pageY)
//     }}
//     >
      
//     </div>
//   )
// }

// export default App

import React from 'react'

const App = () => {

  const scroll = (val) => {
    if(val>0){
      console.log("Seedha Scrolling")
    }else{
      console.log("Ultha Scrolling")
    }
  }

  return (
    <div onWheel={function(elem){
      scroll(elem.deltaY)
    }} >
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}

export default App



