import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1content = () => {
  return (
    <div className='py-10 px-12 flex items-center h-[90vh] gap-10'>
        <Leftcontent/>
        <Rightcontent/>
    </div>
  )
}

export default Page1content
