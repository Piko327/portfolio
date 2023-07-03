import React from 'react'

const Card=(props)=> {
  return (
    <div className='card'>
    <h1 className='card_title'>{props.title}</h1>
    <img className='card_img' src={props.img} alt="certificate" ></img>
 
   </div>
  )
}

export default Card