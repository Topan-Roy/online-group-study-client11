import React from 'react';


import { Outlet } from 'react-router';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const AuthLayout = () => {
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

export default AuthLayout;