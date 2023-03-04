import React from 'react'
import Header from '../components/Header';
import SideBar from '../components/SideBar';

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
                    {/* SEARCH PATIENTS CONTAINER */}
                    <div className='flex justify-between'>
                        <div className=''>
                            <input type="text" placeholder='Search Patients' className='p-1' />
                            <input type="text" placeholder='Filter' className='p-1 ml-4' />
                        </div>
                        <div>
                            <button className='bg-[#0AC1C9] text-white p-1'>+ Add New Patient</button>
                        </div>
                    </div>

                    {/* PATIENTS RECORDS CONTAINER */}
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Medical Record #</th>
                                    <th>Data Acquired</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Jhon Lloyd N. Babon</td>
                                    <td>029309</td>
                                    <td>December 29, 2022</td>
                                    <td>Existing Patient</td>
                                    <td>Delete</td>
                                </tr>

                                <tr>
                                    <td>Jhon Lloyd N. Babon</td>
                                    <td>029309</td>
                                    <td>December 29, 2022</td>
                                    <td>Existing Patient</td>
                                    <td>Delete</td>
                                </tr>

                                <tr>
                                    <td>Jhon Lloyd N. Babon</td>
                                    <td>029309</td>
                                    <td>December 29, 2022</td>
                                    <td>Existing Patient</td>
                                    <td>Delete</td>
                                </tr>
                            </tbody>
                        </table>
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