import React from 'react'
import Header from '../components/Header';
import SideBar from '../components/Sidebar';

const Patients = () => {
    return (
        <>
            <Header />
            <div className='flex h-[calc(100vh_-_3.5rem)]'>
                <div className='flex-2'>
                    <SideBar />
                </div>

                {/* PATIENTS WRAPPER */}
                <div className='bg-gray-300 p-4 w-full'>
                    <h1 className='text-2xl font-semibold'>Patient</h1>

                    <div className='flex items-center justify-between p-2 border-b-2 border-black'>
                        <h1 className=''>Patient List</h1>
                        <button className='bg-sky-500 text-white p-1'>+ Add Patient</button>
                    </div>
                    

                    {/* PAGINATION CONTAINER */}
                    <div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Patients;