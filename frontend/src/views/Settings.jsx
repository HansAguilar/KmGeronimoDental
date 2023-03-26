import React from 'react'
import Header from '../components/Header';
import SideBar from '../components/Sidebar';

const Settings = () => {
    return (
        <>
            <Header />
            <div className='flex h-[calc(100vh_-_3.5rem)]'>
                <div className='flex-2'>
                    <SideBar />
                </div>

                <div>

                </div>
            </div>
        </>
    );
}

export default Settings;