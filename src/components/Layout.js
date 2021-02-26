import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Styles from './layout.css'

export const Layout = ({children}) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />    
        </>
    )
}

export default Layout