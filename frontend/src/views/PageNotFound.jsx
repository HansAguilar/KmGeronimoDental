import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

import notFound404Img from '../assets/images/page404.svg';
import { Link, NavLink } from 'react-router-dom';
import Dashboard from './Dashboard';

const PageNotFound = () => {
    return (
        <>
            <Header />
            <div className='flex h-[calc(100vh_-_3.5rem)]'>
                <div className='flex-2'>
                    <SideBar />
                </div>

                {/* PAGE NOT FOUND CONTENT */}
                <div className='w-full flex flex-col justify-center items-center gap-2'>
                    <img src={notFound404Img} alt="404 Page Not Found" width={500} />
                    <h1 className='text-3xl font-semibold'>Page Not Found</h1>
                    <h4>It looks like you are accessing a page that does not exist</h4>
                    <Link className='text-sky-500' to='./dashboard'>Go to dashboard</Link>
                </div>
            </div>
        </>
    )
}

export default PageNotFound;

