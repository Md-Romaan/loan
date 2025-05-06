import React from 'react'
import { NavLink } from 'react-router'
import './navbar.css'

const Navbar = () => {
    return (
        <>
            <nav id='nav'>
                <div id='logo'>
                    Loan Calculator
                </div>
                <ul id='nav-links'>
                    <li><NavLink className={({ isPending, isActive }) =>
                        isPending ? "pending" : isActive ? "active" : ""} to="/">Home</NavLink></li>
                    <li><NavLink className={({ isPending, isActive }) =>
                        isPending ? "pending" : isActive ? "active" : ""} to="/exchange-rates">Exchange Rates (Live)</NavLink></li>
                    <li><NavLink className={({ isPending, isActive }) =>
                        isPending ? "pending" : isActive ? "active" : ""} to="/about">About</NavLink></li>
                    <li><NavLink className={({ isPending, isActive }) =>
                        isPending ? "pending" : isActive ? "active" : ""} to="/error">Error Page</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar