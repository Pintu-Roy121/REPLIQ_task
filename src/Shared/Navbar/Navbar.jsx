import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { cartContext } from '../../Context/CartProvider/CartProvider';

const Navbar = () => {
    const { keysLength } = useContext(cartContext)

    return (
        <div className='bg-gray-200 shadow-md fixed w-full z-10 top-0'>
            <div className='flex gap-5 justify-between w-4/5 mx-auto text-xl font-semibold py-4'>
                <div className='flex gap-5'>
                    <Link to='/'>Home</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/allproduct'>Products</Link>
                    <Link to='/dashboard'>Dashboard</Link>
                </div>

                <Link to='/cart' className="indicator">
                    <span className="indicator-item badge badge-secondary">{keysLength}</span>
                    <button ><FaShoppingCart className='text-2xl' /></button>
                </Link>


            </div>

        </div>
    );
};

export default Navbar;