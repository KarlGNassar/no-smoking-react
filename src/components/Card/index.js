import React from 'react'
import './Card.css'

const Card = () => {
    return (
        <div className="card">
            <div className="card__top">
                    <div className="card__title">
                        <h1>Karl, you did not smoke for</h1>
                    </div>
                    <div className="card__paragraph">
                        <p>25 days</p>
                    </div>
            </div>
            
            <div className="card__bottom">
                <div className="card__left">
                        <div className="card__title">
                            <h1>Cigarettes not smoked</h1>
                        </div>
                        <div className="card__paragraph">
                            <p>5521</p>
                        </div>
                </div>
                <div className="card__right">
                    <div className="card__title">
                        <h1>Money saved</h1>
                    </div>
                    <div className="card__paragraph">
                        <p>368 USD</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
