import React from 'react'
import Card from './Components/Card'

const App = () => {

  const data = [
    {
      companyName: "PixelCraft Studio",
      post: "Senior UI/UX Designer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$20/hr",
      location: "Mumbai, India"
    },
    {
      companyName: "CodeNest Labs",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$25/hr",
      location: "Bangalore, India"
    },
    {
      companyName: "DesignHive",
      post: "Junior UI Designer",
      tag1: "Internship",
      tag2: "Entry Level",
      pay: "$10/hr",
      location: "Delhi, India"
    },
    {
      companyName: "TechWave Solutions",
      post: "Product Designer",
      tag1: "Remote",
      tag2: "Senior Level",
      pay: "$30/hr",
      location: "Remote, India"
    },
    {
      companyName: "Appify Corp",
      post: "UX Researcher",
      tag1: "Contract",
      tag2: "Mid Level",
      pay: "$22/hr",
      location: "Pune, India"
    }
  ]

  console.log(data);

  return(
    <div className='parent'>
      {data.map(function(elem,idx){
        return 
          <Card company = {elem.companyName} post ={elem.post} tag1 = {elem.tag1} tag2 ={elem.tag2} pay = {elem.pay} location ={elem.location}/>
      })}
    </div>
  )

};




export default App
