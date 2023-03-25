import React from 'react'
import Header from '../components/Header'
import { NavLink } from "react-router-dom";

const ForgotPassword = () => {
    return (
        <>
            <Header />
            <div className='h-[calc(100vh_-_3.5rem)] w-3/12 m-auto flex items-center justify-center'>
                <div>
                    <div className='shadow-md flex flex-col text-center justify-center p-6 gap-6 min-h-full'>
                        <h1 className='text-3xl font-bold'>Forgot Password</h1>
                        <p className=''>Resseting your password is easy. Just type your email, and we will send you an email to reset your password.</p>
                        <input
                            className="border border-[#0AC1C9] focus:bg-sky-100 transition-all delay-75 ease-in outline-none px-4 py-2 rounded-md"
                            type="email"
                            placeholder="Enter your name"
                        />
                        <button className='bg-[#0AC1C9] px-4 py-2 rounded-md text-white outline-none'>Send</button>
                        <p>Did you remember your password? <NavLink to='/login' className="text-[#0AC1C9]">Login</NavLink></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword;