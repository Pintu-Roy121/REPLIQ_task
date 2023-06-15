import React, { useContext, useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { addToDB } from '../../../utilities/fakedb';
import { cartContext } from '../../../Context/CartProvider/CartProvider';

const Products = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);

    const { refresh, setRefresh } = useContext(cartContext)


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                // console.log(data.slice(0, 6));
                setProducts(data.slice(0, 6))
            })
    }, []);

    const handleAddToCart = (selectedProduct) => {
        // console.log(selectedProduct);
        // const newCart = [...cart, selectedProduct]
        let newCart = [];
        const exists = cart.find(product => product._id === selectedProduct);
        // console.log(exists);
        if (exists) {
            const rest = cart.filter(product => product._id !== selectedProduct._id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        } else {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        setCart(newCart);
        addToDB(selectedProduct._id);
        setRefresh(!refresh)
    }

    return (
        <div className='w-4/5 mx-auto my-10'>
            <h1 className='text-4xl font-bold text-center underline'>Product List</h1>
            <div className='mt-5'>

                <div className='grid grid-cols-3 gap-5'>
                    {
                        products?.map((product, i) =>
                            <div key={i} className="card card-compact bg-base-100 shadow-xl">
                                <figure><img src={product?.img} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{product?.name}</h2>
                                    <p className='text-lg font-bold'>Price: $ {product?.price}</p>

                                    <div className=''>
                                        <p className='text-lg font-semibold'>Mantufacturer: {product?.seller}</p>
                                        <p className='text-lg font-semibold'>Rating: {product?.ratings}</p>
                                    </div>
                                    <div className="card-actions justify-end">
                                        <button onClick={() => handleAddToCart(product)} className="btn btn-primary">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

                <Link to='/allproduct' className='text-lg font-bold text-red-600 flex justify-end items-center gap-3 my-5'>
                    See All
                    <FaArrowRight />
                </Link>
            </div>
        </div>
    );
};

export default Products;