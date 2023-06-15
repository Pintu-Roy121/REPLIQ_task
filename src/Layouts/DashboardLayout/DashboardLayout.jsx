import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div className='py-16'>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>


                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side fixed top-16">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 flex flex-col gap-2">

                        <li><Link to='/dashboard/customer' className='text-lg font-bold bg-red-300'>Customers List</Link></li>
                        <li><Link to='/dashboard/orderlist' className='text-lg font-bold bg-red-300'>Order List</Link></li>
                        <li><Link to='/dashboard/productlist' className='text-lg font-bold bg-red-300'>Product List</Link></li>
                    </ul>

                </div>
            </div>

        </div >
    );
};

export default DashboardLayout;