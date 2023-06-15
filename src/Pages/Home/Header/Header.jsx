import React from 'react';
import banner from '../../../assets/banner.jpg'

const Header = () => {
    return (
        <div className="hero min-h-screen mb-8 pt-14" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="w-11/12">
                    <h1 className="mb-5 w-4/5 mx-auto text-5xl lg:text-6xl font-bold text-white">Welcome To New E-Commerce World !!</h1>
                    <p className='md:w-3/4 lg:w-1/2 mx-auto text-white text-justify'>Ecommerce is a method of buying and selling goods and services online. The definition of ecommerce business can also include tactics like affiliate marketing. You can use ecommerce channels such as your own website, an established selling website like Amazon, or social media to drive online sales.</p>
                </div>
            </div>
        </div>
    );
};

export default Header;