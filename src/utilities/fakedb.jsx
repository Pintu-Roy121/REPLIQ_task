

const addToDB = (id) => {
    let shoppingCart = getStoredCart();


    const quantity = shoppingCart[id];

    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    } else {
        shoppingCart[id] = 1
    }
    localStorage.setItem('Shopping-cart', JSON.stringify(shoppingCart))
}

const getStoredCart = () => {
    let shoppingCart = {};
    const storedCart = localStorage.getItem('Shopping-cart');
    // console.log(storedCart);
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }
    return shoppingCart;
}

const removeFromDb = id => {
    const storedCart = localStorage.getItem('Shopping-cart');
    // console.log(storedCart);
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('Shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () => {
    localStorage.removeItem('Shopping-cart');
}


export { addToDB, getStoredCart, removeFromDb, deleteShoppingCart }

