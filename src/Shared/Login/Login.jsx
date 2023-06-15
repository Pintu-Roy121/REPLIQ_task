import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm()

    const handleLogin = (data) => {
        console.log(data)
    }

    return (
        <div className='my-14 bg-slate-200 w-full md:w-3/4 mx-auto p-16 md:p-24 rounded-xl'>
            <h1 className='text-4xl text-center font-bold'>Login</h1>
            <form className='w-full md:w-3/4 mx-auto' onSubmit={handleSubmit(handleLogin)}>
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

                <input type="submit" value='Login' className='btn btn-info w-full my-5' />
            </form>
            <div className='w-3/4 mx-auto'>
                <p>New to doctors Porta? <Link to='/signup' className='text-info hover:text-sky-600 duration-200 underline'>Create New Account</Link> </p>
            </div>

        </div >
    );
};

export default Login;