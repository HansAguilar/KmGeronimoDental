import React from 'react'
import Header from '../components/Header';
import SideBar from '../components/SideBar';

const Admin = () => {
    return (
        <>
            <Header />
            <div className='flex h-[calc(100vh_-_3.5rem)]'>
                <div className='flex-2'>
                    <SideBar />
                </div>

                <div className='bg-grey-300'>
                    
                </div>
            </div>
        </>
    );
}

export default Admin;