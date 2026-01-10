import React from 'react';

const Card = (props) => {
  return (
    <div className='card'>
      <h1>{props.user},{props.age}</h1>
      <p>
        {props.disc}
      </p>
      <button>{props.but}</button>
    </div>
  );
}

export default Card;
