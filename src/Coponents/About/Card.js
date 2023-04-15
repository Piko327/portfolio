import React from 'react'

const Card=(props)=> {
  return (
    <div className='certificate'>
    <h1>{props.title}</h1>
    <img src={props.img} alt="Girl in a jacket" ></img>
   </div>
  )
}

export default Card