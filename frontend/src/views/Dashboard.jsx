import React from 'react'
import Header from '../components/Header';
import SideBar from '../components/Sidebar';

const Dashboard = () => {
    return (
        <>
            <Header />
            <div className='flex h-[calc(100vh_-_3.5rem)]'>
                <div className='flex-2'>
                    <SideBar />
                </div>

                {/* DASHBOARD WRAPPER */}
                <div className='flex-1 p-4 '>
                    <h1 className='font-semibold text-2xl mb-4'>DASHBOARD</h1>
                    {/* CARD CONTAINER */}
                    <div className='flex gap-10 justify-between'>

                        {/* CHILD CARD */}
                        <div className='bg-blue-500 w-64 p-6 flex justify-between items-center'>
                            <div>
                                <p>3</p>
                                <p>Patients</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 256 256"><path fill="white" d="M248.8 146.4a7.7 7.7 0 0 1-4.8 1.6a8 8 0 0 1-6.4-3.2A51.6 51.6 0 0 0 196 124a8 8 0 0 1 0-16a24 24 0 1 0-23.6-28.5a8 8 0 1 1-15.7-3a40 40 0 1 1 66.3 37a67.8 67.8 0 0 1 27.4 21.7a8 8 0 0 1-1.6 11.2Zm-56 66.1a8.1 8.1 0 0 1-3.7 10.7a9.3 9.3 0 0 1-3.5.8a8.1 8.1 0 0 1-7.2-4.5a56.1 56.1 0 0 0-100.8 0a8 8 0 0 1-10.7 3.7a8.1 8.1 0 0 1-3.7-10.7a72.1 72.1 0 0 1 35.6-34.4a48 48 0 1 1 58.4 0a72.1 72.1 0 0 1 35.6 34.4ZM128 172a32 32 0 1 0-32-32a32.1 32.1 0 0 0 32 32Zm-60-56a8 8 0 0 0-8-8a24 24 0 1 1 23.6-28.5a8 8 0 1 0 15.7-3a40 40 0 1 0-66.3 37a67.8 67.8 0 0 0-27.4 21.7a8 8 0 0 0 1.6 11.2A7.7 7.7 0 0 0 12 148a8 8 0 0 0 6.4-3.2A51.6 51.6 0 0 1 60 124a8 8 0 0 0 8-8Z" /></svg>
                        </div>

                        {/* CHILD CARD */}
                        <div className='bg-blue-500 w-64 p-6 flex justify-between items-center'>
                            <div>
                                <p>10</p>
                                <p>Confirmed Appointment</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24"><path fill="white" d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2m0 16H5V9h14v10M5 7V5h14v2H5m5.56 10.46l5.94-5.93l-1.07-1.06l-4.87 4.87l-2.11-2.11l-1.06 1.06l3.17 3.17Z" /></svg>
                        </div>

                        {/* CHILD CARD */}
                        <div className='bg-blue-500 w-64 p-6 flex justify-between items-center'>
                            <div>
                                <p>3</p>
                                <p>Pending Payments</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24"><path fill="white" d="M19 14V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-2 0H3V6h14v8zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3zm13 0v11c0 1.1-.9 2-2 2H4v-2h17V7h2z" /></svg>
                        </div>

                        {/* CHILD CARD */}
                        <div className='bg-blue-500 w-64 p-6 flex justify-around items-center'>
                            <div>
                                <p>3</p>
                                <p>Pending Appointments</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24"><path fill="white" d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2m0 16H5V9h14v10M5 7V5h14v2H5m3.23 9.41l1.06 1.06l2.44-2.44l2.44 2.44l1.06-1.06l-2.44-2.44l2.44-2.44l-1.06-1.06l-2.44 2.44l-2.44-2.44l-1.06 1.06l2.44 2.44l-2.44 2.44Z" /></svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Dashboard;
