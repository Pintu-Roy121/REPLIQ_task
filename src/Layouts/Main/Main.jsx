import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='pb-2'>
            <Navbar></Navbar>
            <Outlet></Outlet>

        </div>
    );
};

export default Main;