import React from 'react'
import RightCard from './RightCard'

const Rightcontent = (props) => {

 
  
  return (
    <div id = "right" className='h-full w-3/4 flex flex-nowrap gap-10 overflow-x-auto p-5'>
      {props.user.map(function(elem,idx){
        return <RightCard key={idx} id={idx} img={elem.img} tag = {elem.tag} color = {elem.color} />
      })}
    </div>
  )
}

export default Rightcontent
