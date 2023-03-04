import React from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

const Appointments = () => {
    return (
        <>
            <Header />
            <div className='flex h-[calc(100vh_-_3.5rem)]'>
                <div className='flex-2'>
                    <SideBar />
                </div>

                {/* APPOINTMENT WRAPPER */}
                <div className='flex-1 p-4'>
                    <h1 className='font-semibold text-2xl mb-4'>APPOINTMENTS</h1>
                    {/* APPOINTMENT TITLE CONTAINER */}

                    <table className="w-full border-collapse border border-gray-400">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="p-3 text-left">Name</th>
                                <th className="p-3 text-left">Date &amp; Time</th>
                                <th className="p-3 text-left">Case</th>
                                <th className="p-3 text-left">Status</th>
                                <th className="p-3 text-left">Payment Type</th>
                                <th className="p-3 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-gray-100 hover:bg-gray-200">
                                <td className="p-3">Jeff Martinez</td>
                                <td className="p-3">Wed, Jan 12 | 01:00 pm</td>
                                <td className="p-3">Orthodontics</td>
                                <td className="p-3">Pending</td>
                                <td className="p-3">Cash</td>
                                <td className="p-3 flex ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#abf5c4" d="m10.6 13.8l-2.175-2.175q-.275-.275-.688-.263t-.687.288q-.275.275-.275.7t.275.7L9.9 15.9q.275.275.7.275t.7-.275l5.675-5.675q.275-.275.263-.688t-.288-.687q-.275-.275-.7-.275t-.7.275L10.6 13.8ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-10Zm0 8q3.325 0 5.663-2.337T20 12q0-3.325-2.337-5.663T12 4Q8.675 4 6.337 6.337T4 12q0 3.325 2.337 5.663T12 20Z" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 15 15"><path fill="#f5abab" fill-rule="evenodd" d="M.877 7.5a6.623 6.623 0 1 1 13.246 0a6.623 6.623 0 0 1-13.246 0ZM7.5 1.827a5.673 5.673 0 1 0 0 11.346a5.673 5.673 0 0 0 0-11.346Zm2.354 3.32a.5.5 0 0 1 0 .707L8.207 7.5l1.647 1.646a.5.5 0 0 1-.708.708L7.5 8.207L5.854 9.854a.5.5 0 0 1-.708-.708L6.793 7.5L5.146 5.854a.5.5 0 0 1 .708-.708L7.5 6.793l1.646-1.647a.5.5 0 0 1 .708 0Z" clip-rule="evenodd" /></svg>
                                </td>
                            </tr>
                            <tr className="bg-white hover:bg-gray-200">
                                <td className="p-3">John Doe</td>
                                <td className="p-3">Thu, Jan 13 | 02:30 pm</td>
                                <td className="p-3">Dental cleaning</td>
                                <td className="p-3">Completed</td>
                                <td className="p-3">Credit card</td>
                                <td className="p-3 flex ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#abf5c4" d="m10.6 13.8l-2.175-2.175q-.275-.275-.688-.263t-.687.288q-.275.275-.275.7t.275.7L9.9 15.9q.275.275.7.275t.7-.275l5.675-5.675q.275-.275.263-.688t-.288-.687q-.275-.275-.7-.275t-.7.275L10.6 13.8ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-10Zm0 8q3.325 0 5.663-2.337T20 12q0-3.325-2.337-5.663T12 4Q8.675 4 6.337 6.337T4 12q0 3.325 2.337 5.663T12 20Z" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 15 15"><path fill="#f5abab" fill-rule="evenodd" d="M.877 7.5a6.623 6.623 0 1 1 13.246 0a6.623 6.623 0 0 1-13.246 0ZM7.5 1.827a5.673 5.673 0 1 0 0 11.346a5.673 5.673 0 0 0 0-11.346Zm2.354 3.32a.5.5 0 0 1 0 .707L8.207 7.5l1.647 1.646a.5.5 0 0 1-.708.708L7.5 8.207L5.854 9.854a.5.5 0 0 1-.708-.708L6.793 7.5L5.146 5.854a.5.5 0 0 1 .708-.708L7.5 6.793l1.646-1.647a.5.5 0 0 1 .708 0Z" clip-rule="evenodd" /></svg>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </>
    );
}

export default Appointments;