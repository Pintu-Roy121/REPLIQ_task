import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm()

    const handleLogin = (data) => {
        console.log(data)
    }
    return (
        <div>
            <div className='bg-white shadow-lg px-5 py-2 flex gap-3 items-center'>

                <Link to='/dashboard/productlist' className='btn btn-sm btn-accent'>Back</Link>
                <h1 className='text-2xl font-semibold'>Product List</h1>
            </div>
            <form className='w-full md:w-3/4 mx-auto mt-16' onSubmit={handleSubmit(handleLogin)}>
                <h1 className='text-2xl font-bold text-center underline'>Add Product</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Product_Name:</span>
                    </label>
                    <input type="text"
                        {...register("name", {
                            required: 'Name is Required'
                        })}
                        className="input input-bordered input-info w-full" />
                    {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Category_Name:</span>
                    </label>
                    <input type="text"
                        {...register("category", {
                            required: 'category is Required'
                        })}
                        className="input input-bordered input-info w-full" />
                    {errors.category && <p className='text-red-600'>{errors.category?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Brand_Name:</span>
                    </label>
                    <input type="text"
                        {...register("seller", {
                            required: 'Brand Name is Required'
                        })}
                        className="input input-bordered input-info w-full" />
                    {errors.seller && <p className='text-red-600'>{errors.seller?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Price:</span>
                    </label>
                    <input type="number"
                        {...register("price", {
                            required: 'price is Required'
                        })}
                        className="input input-bordered input-info w-full" />
                    {errors.price && <p className='text-red-600'>{errors.price?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Quentity:</span>
                    </label>
                    <input type="number"
                        {...register("stock", {
                            required: 'Quentity is Required'
                        })}
                        className="input input-bordered input-info w-full" />
                    {errors.stock && <p className='text-red-600'>{errors.stock?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Upload Image:</span>
                    </label>
                    <input type="file"
                        className="input input-bordered input-info w-full" />

                </div>



                <input type="submit" value='save' className='btn btn-info w-full my-5' />
            </form>
        </div>
    );
};

export default AddProduct;