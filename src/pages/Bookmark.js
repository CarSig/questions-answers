import React from 'react'
import Card from "../components/Card"



function Bookmark({ cards, useCards }) {
    return (
        <div className='bookmark'>

            <h2>Bookmark</h2>


            {
                //     cards.filter(function (card) { return card.bookmarked === true }).map(function (c) {
                //     return <Card card={c} key={c.id} />
                // })
            }

        </div>
    )
}

export default Bookmark

