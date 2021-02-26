import React from 'react'
import './Home.css'
import { FaSmokingBan } from 'react-icons/fa'
import Card from '../../components/Card'

const Home = () => {
    return (
        <div className="home">
            <div className="home__logoContainer">
                <FaSmokingBan className="home__logo"/>
            </div>

            <div className="home__card">
                <Card />
            </div>
        </div>
    )
}

export default Home
