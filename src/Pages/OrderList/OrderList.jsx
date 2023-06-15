import React from 'react';

const OrderList = () => {

    const orders = [1, 2, 3, 4, 5, 6, 7]
    return (
        <div>
            <div className='bg-white shadow-lg px-5 py-2'>
                <h1 className='text-2xl font-semibold'>Order List</h1>
            </div>

            <div className="overflow-x-auto m-10">
                <table className="table table-zebra">
                    <thead>
                        <tr className='bg-gray-400 text-white text-lg'>
                            <th>Sl</th>
                            <th>Order_id</th>
                            <th>Email</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((customer, i) =>
                                <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td>Ore-8971{i + 1}</td>
                                    <td>customer{i + 1}@gmail.com</td>
                                    <td>0{i + 3}/0{i + 2}/23</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderList;