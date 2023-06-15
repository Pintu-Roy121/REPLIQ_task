import React, { useContext, useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { removeFromDb } from '../../utilities/fakedb';
import { cartContext } from '../../Context/CartProvider/CartProvider';

const Cart = () => {
    const [cartProduct, setCartProduct] = useState([])
    const { refresh, setRefresh } = useContext(cartContext)


    const products = localStorage.getItem('Shopping-cart')
    const shoppingCart = JSON.parse(products)

    const keys = Object.keys(shoppingCart);


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                const orderedProduct = data?.filter(product => keys?.find(order => order == product?._id))

                setCartProduct(orderedProduct)
            })
    }, [])

    const handleRemoveItem = (id) => {
        const remaining = cartProduct.filter(product => product._id !== id)
        setCartProduct(remaining)
        removeFromDb(id)
        setRefresh(!refresh)
    }


    return (
        <div className='w-1/2 mx-auto my-5 pt-16'>
            <div>
                {
                    cartProduct?.map((product, i) =>
                        <div key={i} className='p-2 border flex items-center justify-between mb-3 rounded-md'>
                            <div className='flex gap-2'>
                                <img src={product?.img} alt="" className='w-28 rounded-md' />
                                <div className=' font-bold'>
                                    <h2>{product?.name}</h2>
                                    <h2>Shipping: {product?.shipping}</h2>
                                    <h2>Price: {product?.price}</h2>
                                    {
                                        keys?.map((key, i) => {
                                            if (key == product?._id) {
                                                return <p key={i}>Quantity: {shoppingCart[key]}</p>
                                            }
                                        })

                                    }
                                </div>
                            </div>
                            <div>
                                <div onClick={() => handleRemoveItem(product?._id)} className='mr-10 bg-red-200 rounded-full p-4 cursor-pointer'>
                                    <button>
                                        <FaTrashAlt className='text-error text-3xl' />
                                    </button>
                                </div>
                            </div>

                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Cart;