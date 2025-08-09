import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Shared/Footer';

const RootLayout = () => {
    return (
        <div>
            <header className=' py-3'>
                <Navbar></Navbar>
            </header >
            <main className='w-11/12 mx-auto '>
                <Outlet></Outlet>
            </main>
            <footer className=' py-3'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default RootLayout;