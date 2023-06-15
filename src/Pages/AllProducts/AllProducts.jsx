import React, { useContext, useEffect, useState } from 'react';
import { addToDB } from '../../utilities/fakedb';
import { cartContext } from '../../Context/CartProvider/CartProvider';

const AllProducts = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);
    const { refresh, setRefresh } = useContext(cartContext)


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data.slice(0, 6));
                setProducts(data)
            })
    }, [])



    const handleAddToCart = (selectedProduct) => {

        let newCart = [];
        const exists = cart.find(product => product._id === selectedProduct);

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
        <div className='w-11/12 mx-auto my-10 pt-16'>
            <h1 className='text-4xl font-bold text-center underline'>Product List</h1>
            <div className='mt-5'>
                <div className='grid grid-cols-4 gap-5 '>
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
            </div>
        </div>
    );
};

export default AllProducts;