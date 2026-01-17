import React from 'react'

const Card = (props) => {

  console.log(props.company);
  

  return (
    <div className='main'>
      <div className="top">
        <div>
          <img src="https://brandemia.org/contenido/subidas/2022/11/tipografia-y-paleta-de-color.png" alt="" />
        </div>
        <div>
          <h4>Save</h4>
        </div>
      </div>

      <div className="center">
        <h2>{props.company}</h2>
        <p>5 days ago</p>
        <h1>{props.post}</h1>
        <button>{props.tag1}</button>
        <button>{props.tag2}</button>
      </div>

      <div className="bottom">
        <h3>{props.pay}</h3>
        <p>{props.location}</p>
        <button>Apply Now</button>
      </div>
    </div>
  )
}

export default Card
