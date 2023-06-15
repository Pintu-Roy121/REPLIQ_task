import React from 'react';
import { Link } from 'react-router-dom';

const Customer = () => {

    const customers = [1, 2, 3, 4, 5, 6]
    return (
        <div>
            <div className='bg-white shadow-lg px-5 py-2 flex gap-2 items-center'>
                <h1 className='text-2xl font-semibold'>Customer</h1>
                <Link to='/dashboard/addcustomer' className='btn btn-sm btn-accent'>Add Customer</Link>
            </div>

            <div className="overflow-x-auto m-10">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className='bg-gray-400 text-white text-lg'>
                            <th>Sl</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            customers?.map((customer, i) =>
                                <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td>Customer-{i + 1}</td>
                                    <td>customer{i + 1}@gmail.com</td>
                                    <td>0186475{i + 3}{i + 2}8{i + 1}</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Customer;