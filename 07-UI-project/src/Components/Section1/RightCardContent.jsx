import React from 'react'

const RightCardContent = (props) => {
  
    
  return (
      <div className='absolute top-0 left-0 h-full w-full p-5 flex flex-col justify-between'>
                <h2 className='bg-white text-2xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>{props.id + 1}</h2>
                <div className='flex flex-col gap-7  text-white'>
                    <p className='text-lg leading-6 font-semibold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aliquam eum accusantium odio fuga eaque mollitia eos, suscipit fugiat facere.</p>
                    <div className='flex justify-between'>
                        <button style={{backgroundColor:props.color}} className=' px-7 py-2 rounded-full font-medium '>{props.tag}</button>
                        <button style={{backgroundColor:props.color}} className=' px-3 py-2 rounded-full font-medium '><i className="ri-arrow-right-long-fill"></i></button>
                    </div>
                </div>

            </div>
  )
}

export default RightCardContent
