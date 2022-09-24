import React from 'react'
import Card from "../components/Card"


function Home({ cards }) {
    return (
        <div className='home'>
            <Card card={cards[0]} />
            <Card card={cards[1]} />
            <Card card={cards[2]} />

            {
                //        cards.map(function (c) {
                //      return <Card card={c} key={c.id} />
                // })
            }

        </div>
    )
}

export default Home