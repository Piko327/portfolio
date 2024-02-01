import React from 'react'

const Card = ({ certificate}) => {
    return (
        <div className='card'>
            <h1 className='card_title'>{certificate.title}</h1>
            
            <img className='card_img' src={certificate.img} alt="certificate" ></img>

        </div>
    )
}

export default Card