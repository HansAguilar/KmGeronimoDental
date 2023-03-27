import useFetch from '../api/useFetch';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

const Appointments = () => {
    const { loading, usersData } = useFetch("http://localhost:3001/patientsdata"); //^ get patients data

    if (loading) return <h1 className='text-2xl font-semibold'>Loading...</h1>

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
                                <th className="p-3 text-left">Appointment Status</th>
                                <th className="p-3 text-left">Payment Status</th>
                                <th className="p-3 text-left">Payment Type</th>
                                <th className="p-3 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                usersData.map(patient => (
                                    <tr className="bg-gray-100 " key={patient.patientID}>
                                        <td className="p-3">{patient.firstname} {patient.lastname}</td>
                                        <td className="p-3">{patient.appointmentDate} | {patient.appointmentTime}</td>
                                        <td className="p-3">{patient.appointmentCase}</td>
                                        <td className="p-3">{patient.appointmentStatus}</td>
                                        <td className="p-3">{patient.paymentStatus}</td>
                                        <td className="p-3">{patient.paymentType}</td>
                                        <td className="p-3 flex items-center justify-around text-sm text-white">
                                            <div className='flex items-center p-1 px-2 bg-[#00cc66] rounded hover:bg-[#0bad5c] cursor-pointer transition-all active:bg-[#00cc66] ease-in'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="m10.6 13.8l-2.175-2.175q-.275-.275-.688-.263t-.687.288q-.275.275-.275.7t.275.7L9.9 15.9q.275.275.7.275t.7-.275l5.675-5.675q.275-.275.263-.688t-.288-.687q-.275-.275-.7-.275t-.7.275L10.6 13.8ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-10Zm0 8q3.325 0 5.663-2.337T20 12q0-3.325-2.337-5.663T12 4Q8.675 4 6.337 6.337T4 12q0 3.325 2.337 5.663T12 20Z" /></svg>
                                                <p>Approve</p>
                                            </div>
                                            <div className='flex items-center p-1 px-2 rounded bg-[#ff6666] hover:bg-[#dc5555] cursor-pointer transition-all active:bg-[#ff6666] ease-in'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 15 15"><path fill="white" fillRule="evenodd" d="M.877 7.5a6.623 6.623 0 1 1 13.246 0a6.623 6.623 0 0 1-13.246 0ZM7.5 1.827a5.673 5.673 0 1 0 0 11.346a5.673 5.673 0 0 0 0-11.346Zm2.354 3.32a.5.5 0 0 1 0 .707L8.207 7.5l1.647 1.646a.5.5 0 0 1-.708.708L7.5 8.207L5.854 9.854a.5.5 0 0 1-.708-.708L6.793 7.5L5.146 5.854a.5.5 0 0 1 .708-.708L7.5 6.793l1.646-1.647a.5.5 0 0 1 .708 0Z" clipRule="evenodd" /></svg>
                                                <p className='text-white'>Decline</p>
                                            </div>
                                            <div className='flex items-center p-1 px-2 bg-gray-700 rounded hover:bg-gray-500 cursor-pointer transition-all active:bg-gray-700 ease-in'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M12 6.5a9.77 9.77 0 0 1 8.82 5.5c-1.65 3.37-5.02 5.5-8.82 5.5S4.83 15.37 3.18 12A9.77 9.77 0 0 1 12 6.5m0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 5a2.5 2.5 0 0 1 0 5a2.5 2.5 0 0 1 0-5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5s4.5-2.02 4.5-4.5s-2.02-4.5-4.5-4.5z" /></svg>
                                                <p>View</p>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Appointments;