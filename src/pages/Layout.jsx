import React from 'react'
import { NavLink, Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const Layout = () => {
    return (
        <>
            <div>
                <Navbar />
                <Outlet />
            </div>
        </>
    )
}

export default Layout