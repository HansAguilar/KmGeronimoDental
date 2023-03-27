import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

const Announcement = () => {
    return (
        <>
            <Header />
            <div className='flex h-[calc(100vh_-_3.5rem)]'>
                <div className='flex-2'>
                    <SideBar />
                </div>
                <div className='p-4 w-full'>
                    <h1 className='text-2xl font-semibold'>Announcement</h1>
                </div>
            </div>
        </>
    )
}

export default Announcement