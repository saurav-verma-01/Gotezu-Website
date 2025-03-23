import React from 'react'
import NavBar from "../sections/NavBar.jsx";
import Footer from "../sections/Footer.jsx";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}
export default RootLayout
