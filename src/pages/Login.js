import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) =>{
        console.log(data);
    }

    return (
        <div className='w-1/2 mx-auto my-24'>
            <h3>Login</h3>
            <div className='mt-5'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='my-5'>
                    <input type="text" name='name' {...register("name")} placeholder='Enter your Name' />
                    </div>
                    <div>
                    <input type="text" name='password' {...register("password")} placeholder='Enter your password' />
                    </div>
                    <button className='btn btn-warning mt-5' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Login;