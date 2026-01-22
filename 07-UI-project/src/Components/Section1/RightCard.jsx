import React from 'react'
import RightCardContent from './RightCardContent'



const RightCard = (props) => {

    return (
        <div className='h-full w-80  overflow-hidden rounded-4xl relative shrink-0  '>
            <img className='h-full w-full object-cover  ' src={props.img} alt="" />
            <RightCardContent id={props.id} tag = {props.tag} color={props.color}/>
        </div>
    )
}

export default RightCard
