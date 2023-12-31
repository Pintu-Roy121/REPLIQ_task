import React from 'react';
import { Link } from 'react-router-dom';

const products = [
    {
        "_id": 2547821,
        "category": "Men's Sneaker",
        "name": "ULTRABOOST 22 SHOES",
        "seller": "Addidas",
        "price": 420,
        "stock": 20,
        "ratings": 4,
        "ratingsCount": 3725,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
        "shipping": 1,
        "quantity": 0
    },
    {
        "_id": 2547822,
        "category": "Men's Sneaker",
        "name": "LUNAR NEW YEAR ULTRABOOST DNA SHOES",
        "seller": "Addidas",
        "price": 196,
        "stock": 19,
        "ratings": 5,
        "ratingsCount": 4355,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2cee64414e1f4f31baf1ae270099d950_9366/Lunar_New_Year_Ultraboost_DNA_Shoes_Black_GZ6074_01_standard.jpg",
        "shipping": 14,
        "quantity": 0
    },
    {
        "_id": 2547823,
        "category": "Men's Sneaker",
        "name": "SUPERNOVA SHOES",
        "seller": "Addidas",
        "price": 245,
        "stock": 20,
        "ratings": 4,
        "ratingsCount": 3972,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/69cbc73d0cb846889f89acbb011e68cb_9366/Supernova_Shoes_Black_S42722_01_standard.jpg",
        "shipping": 1,
        "quantity": 0
    },
    {
        "_id": 2547824,
        "category": "Men's Sneaker",
        "name": "LITE RACER ADAPT 3.0 SHOES",
        "seller": "Addidas",
        "price": 229,
        "stock": 10,
        "ratings": 5,
        "ratingsCount": 1764,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/96a5f085fedf4e678095abad01056711_9366/Lite_Racer_Adapt_3.0_Shoes_Black_FX8802_01_standard.jpg",
        "shipping": 32,
        "quantity": 0
    },
    {
        "_id": 2547825,
        "category": "Men's Sneaker",
        "name": "4DFWD SHOES",
        "seller": "Addidas",
        "price": 287,
        "stock": 11,
        "ratings": 4,
        "ratingsCount": 799,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8c5d1994dfd343e28567ad4400dd351d_9366/4DFWD_Shoes_Black_Q46447_01_standard.jpg",
        "shipping": 49,
        "quantity": 0
    },
    {
        "_id": 2547826,
        "category": "Men's Sneaker",
        "name": "KAPTIR 2.0 SHOES",
        "seller": "Addidas",
        "price": 138,
        "stock": 19,
        "ratings": 3,
        "ratingsCount": 4372,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0846e90b15144861b33dacf500e3cfd1_9366/Kaptir_2.0_Shoes_White_H00276_01_standard.jpg",
        "shipping": 19,
        "quantity": 0
    },
    {
        "_id": 2547827,
        "category": "Men's Sneaker",
        "name": "4DFWD PULSE SHOES",
        "seller": "Addidas",
        "price": 226,
        "stock": 1,
        "ratings": 4,
        "ratingsCount": 2870,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9a8256bb7ca34da49ff8ad5600bb2812_9366/4DFWD_Pulse_Shoes_White_Q46221_01_standard.jpg",
        "shipping": 15,
        "quantity": 0
    },
    {
        "_id": 2547828,
        "category": "Men's Sneaker",
        "name": "ZX 1K BOOST SHOES",
        "seller": "Addidas",
        "price": 319,
        "stock": 7,
        "ratings": 4,
        "ratingsCount": 1360,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0e540bae86d5456aa034ada300ebf46c_9366/ZX_1K_Boost_Shoes_Grey_H00430_01_standard.jpg",
        "shipping": 50,
        "quantity": 0
    },
    {
        "_id": 2547829,
        "category": "Men's Sneaker",
        "name": "NMD_R1 V2 SHOES",
        "seller": "Addidas",
        "price": 260,
        "stock": 4,
        "ratings": 5,
        "ratingsCount": 1976,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c2a18c4e3f104d52a697ad6a01477bb7_9366/NMD_R1_V2_Shoes_Black_GX6367_01_standard.jpg",
        "shipping": 46,
        "quantity": 0
    },
    {
        "_id": 25478210,
        "category": "Men's Sneaker",
        "name": "NMD_R1 PRIMEBLUE SHOES",
        "seller": "Addidas",
        "price": 437,
        "stock": 1,
        "ratings": 4,
        "ratingsCount": 565,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0e03e7a2a9cb44dfac2bad6a00f95888_9366/NMD_R1_Primeblue_Shoes_White_GZ9261_01_standard.jpg",
        "shipping": 36,
        "quantity": 0
    },
    {
        "_id": 25478211,
        "category": "Men's Pants",
        "name": "TIRO TRACK PANTS",
        "seller": "Addidas",
        "price": 146,
        "stock": 15,
        "ratings": 5,
        "ratingsCount": 3702,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/856e874762eb48da8e22acda00efaeb4_9366/Tiro_Track_Pants_Black_GN5490_21_model.jpg",
        "shipping": 29,
        "quantity": 0
    },
    {
        "_id": 25478212,
        "category": "Men's Pants",
        "name": "TIRO 21 TRACK PANTS",
        "seller": "Addidas",
        "price": 109,
        "stock": 6,
        "ratings": 5,
        "ratingsCount": 1688,
        "img": "https://m.media-amazon.com/images/I/715chOptsFL._AC_UL1500_.jpg",
        "shipping": 48,
        "quantity": 0
    },
    {
        "_id": 25478213,
        "category": "Men's Pants",
        "name": "PRIMEBLUE SST TRACK PANTS",
        "seller": "Addidas",
        "price": 63,
        "stock": 46,
        "ratings": 4,
        "ratingsCount": 50,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/52b5fde5829a4a04820dacf50127b969_9366/Adicolor_Classics_Primeblue_SST_Track_Pants_Blue_H06714_21_model.jpg",
        "shipping": 20,
        "quantity": 0
    }
]

const ProductList = () => {


    return (
        <div>
            <div className='bg-white shadow-lg px-5 py-2 flex gap-3 items-center'>
                <h1 className='text-2xl font-semibold'>Product List</h1>
                <Link to='/dashboard/addproduct' className='btn btn-sm btn-accent'>Add Produt</Link>
            </div>

            <div className="overflow-x-auto m-5">
                <table className="table">
                    <thead>
                        <tr className='text-lg font-semibold bg-slate-200'>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Product_Name</th>
                            <th>Brand</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((product, i) =>
                                <tr key={i}>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={product?.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{product?.name}</div>
                                                <div className="text-sm opacity-50">{product?.category}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h1 className='text-lg font-bold'>{product?.seller}</h1>
                                    </td>
                                    <td className='font-semibold'>Price: {product?.price} $</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">Quantity : {product?.stock}</button>
                                    </th>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ProductList;