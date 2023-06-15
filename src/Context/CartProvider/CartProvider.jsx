import React, { createContext, useEffect, useState } from 'react';
import { getStoredCart } from '../../utilities/fakedb';

export const cartContext = createContext()

const CartProvider = ({ children }) => {
    const [keysLength, setkeysLength] = useState();
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        let shoppingCart = getStoredCart();

        const keys = Object.keys(shoppingCart);
        const keysLength = keys.length;
        setkeysLength(keysLength)

    }, [refresh])


    const cartInfo = { keysLength, refresh, setRefresh }


    return (
        <cartContext.Provider value={cartInfo}>
            {children}
        </cartContext.Provider>
    );
};

export default CartProvider;