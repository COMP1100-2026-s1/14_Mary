import Header from './HeaderComponent';
import Navbar from './NavbarComponent';
import Footer from './FooterComponent';

import { Outlet } from 'react-router-dom';
import React from 'react'

function Layout() {
    return (
        <div>
            <Header></Header>

            <main>
                <Outlet></Outlet>
            </main>

            <Footer></Footer>
        </div>
    )
}

export default Layout