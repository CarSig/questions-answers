import React from 'react'

function Card({ card }) {
    return (
        <div className='card-container'>
            <h2>{card.question}</h2>
            <p>{card.answer}</p>

        </div>
    )
}

export default Card