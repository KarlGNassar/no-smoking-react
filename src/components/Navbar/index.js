import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaSmokingBan } from 'react-icons/fa'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__logoContainer">
                <Link to='/'>
                    <FaSmokingBan className="navbar__logo"/>
                </Link>
            </div>

            <div className="navbar__links">
                <ul className="navbar__list">
                    <Link to='/'>Home</Link>
                    <Link to='/awards'>Awards</Link>
                    <Link to='/testimonials'>Testimonial</Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
