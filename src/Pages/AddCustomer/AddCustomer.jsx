import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const AddCustomer = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm()

    const handleLogin = (data) => {
        console.log(data)
    }
    return (
        <div>
            <div className='bg-white shadow-lg px-5 py-2 flex gap-3 items-center'>

                <Link to='/dashboard/customer' className='btn btn-sm btn-accent'>Back</Link>
                <h1 className='text-2xl font-semibold'>Customer</h1>
            </div>
            <form className='w-full md:w-3/4 mx-auto mt-16' onSubmit={handleSubmit(handleLogin)}>
                <h1 className='text-2xl font-bold text-center underline'>Add Customer</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Name:</span>
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
                        <span className="label-text text-base font-semibold">Email:</span>
                    </label>
                    <input type="text"
                        {...register("email", {
                            required: 'Email is Required'
                        })}
                        className="input input-bordered input-info w-full" />
                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Password:</span>
                    </label>
                    <input type="password"
                        {...register("password", {
                            required: 'Password is Required'
                        })}
                        className="input input-bordered input-info w-full" />
                    {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                </div>

                <input type="submit" value='save' className='btn btn-info w-full my-5' />
            </form>
        </div>
    );
};

export default AddCustomer;