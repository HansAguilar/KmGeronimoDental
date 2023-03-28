import { useState, useEffect } from 'react';
import useFetch from '../api/useFetch';
import Header from '../components/Header';
import LoadingSpinner from '../components/LoadingSpinner';
import SideBar from '../components/SideBar';

const Appointments = () => {
    const { loading, usersData } = useFetch("http://localhost:3001/patientsdata"); //^ get patients data
    const [appointmentHistory, setAppointmentHistory] = useState([]);
    const [patientsData, setPatientsData] = useState([]);
    const [isHistoryClicked, setIsHistoryClicked] = useState(false);
    const [appointmentFilter, setAppointmentFilter] = useState(null);

    useEffect(() => {
        if (usersData) {
            setPatientsData(usersData);
        }
    }, [usersData]);

    const handleApprove = (id) => {
        const patient = patientsData.find((patient) => patient.patientID === id);
        if (patient) {
            setPatientsData(patientsData.filter((patient) => patient.patientID !== id));
            setAppointmentHistory((prev) => [...prev, patient]);
            window.confirm("Do you want confirm " + patient.firstname + " " + patient.lastname + "?");
        }
    };

    const handleHistory = () => {
        setIsHistoryClicked(!isHistoryClicked);
    }

    if (loading) {
        return (
            <div className=' w-full h-screen flex justify-center items-center '>
                <LoadingSpinner loading={loading} />
            </div>
        )
    }

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
                    <div className='mb-4 flex items-center gap-4'>
                        <div className='flex py-1 px-2 bg-[#0AC1C9] text-white rounded gap-2 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="white" d="M6.865 6.882A7.25 7.25 0 1 1 4.75 12a.75.75 0 0 0-1.5 0a8.75 8.75 0 1 0 2.552-6.176a.756.756 0 0 0-.07.08L4.475 4.646a.5.5 0 0 0-.852.309L3.27 8.844a.5.5 0 0 0 .543.543l3.89-.354a.5.5 0 0 0 .307-.851L6.782 6.954a.757.757 0 0 0 .083-.072Z" /><path fill="white" d="M12.75 7a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 .352.636l3 1.875a.75.75 0 1 0 .796-1.272l-2.648-1.655V7Z" /></svg>
                            <button
                                onClick={() => handleHistory()}
                            >History</button>
                        </div>

                        <div className='flex py-1 px-2 bg-[#0AC1C9] text-white rounded gap-2 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="white" d="M.75 3h14.5a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1 0-1.5ZM3 7.75A.75.75 0 0 1 3.75 7h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 3 7.75Zm3 4a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z" /></svg>
                            <select
                                value={appointmentFilter}
                                className='bg-[#0AC1C9]'
                                onChange={(e) => setAppointmentFilter(e.target.value)}
                            >
                                <option selected>Filter by</option>
                                <option value="name">Name</option>
                                <option value="case">Case</option>
                                <option value="date">Date</option>
                                <option value="time">Time</option>
                                <option value="pending">Approved</option>
                            </select>
                        </div>
                    </div>

                    {/* APPOINTMENT TITLE CONTAINER */}
                    <table className="w-full border-collapse border border-gray-400">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="p-2 text-left">Name</th>
                                <th className="p-2 text-left">Date &amp; Time</th>
                                <th className="p-2 text-left">Case</th>
                                <th className="p-2 text-left">Appointment Status</th>
                                <th className="p-2 text-left">Payment Status</th>
                                <th className="p-2 text-left">Payment Type</th>
                                <th className="p-2 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                patientsData.map(patient =>
                                (
                                    <tr className="bg-gray-100 " key={patient.patientID}>
                                        <td className="p-2">{patient.firstname} {patient.lastname}</td>
                                        <td className="p-2">{patient.appointmentDate} | {patient.appointmentTime}</td>
                                        <td className="p-2">{patient.appointmentCase}</td>
                                        <td className="p-2">{patient.appointmentStatus}</td>
                                        <td className="p-2">{patient.paymentStatus}</td>
                                        <td className="p-2">{patient.paymentType}</td>
                                        <td className="p-2 flex items-center justify-around text-sm text-white">
                                            <div className='flex items-center p-1 px-2 bg-[#00cc66] rounded hover:bg-[#0bad5c] cursor-pointer transition-all active:bg-[#00cc66] ease-in'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="m10.6 13.8l-2.175-2.175q-.275-.275-.688-.263t-.687.288q-.275.275-.275.7t.275.7L9.9 15.9q.275.275.7.275t.7-.275l5.675-5.675q.275-.275.263-.688t-.288-.687q-.275-.275-.7-.275t-.7.275L10.6 13.8ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-10Zm0 8q3.325 0 5.663-2.337T20 12q0-3.325-2.337-5.663T12 4Q8.675 4 6.337 6.337T4 12q0 3.325 2.337 5.663T12 20Z" /></svg>
                                                <button
                                                    onClick={() => handleApprove(patient.patientID)}
                                                >Approve</button>
                                            </div>
                                            <div className='flex items-center p-1 px-2 rounded bg-[#ff6666] hover:bg-[#dc5555] cursor-pointer transition-all active:bg-[#ff6666] ease-in'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 15 15"><path fill="white" fillRule="evenodd" d="M.877 7.5a6.623 6.623 0 1 1 13.246 0a6.623 6.623 0 0 1-13.246 0ZM7.5 1.827a5.673 5.673 0 1 0 0 11.346a5.673 5.673 0 0 0 0-11.346Zm2.354 3.32a.5.5 0 0 1 0 .707L8.207 7.5l1.647 1.646a.5.5 0 0 1-.708.708L7.5 8.207L5.854 9.854a.5.5 0 0 1-.708-.708L6.793 7.5L5.146 5.854a.5.5 0 0 1 .708-.708L7.5 6.793l1.646-1.647a.5.5 0 0 1 .708 0Z" clipRule="evenodd" /></svg>
                                                <button className='text-white'>Decline</button>
                                            </div>
                                            <div className='flex items-center p-1 px-2 bg-gray-700 rounded hover:bg-gray-500 cursor-pointer transition-all active:bg-gray-700 ease-in'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M12 6.5a9.77 9.77 0 0 1 8.82 5.5c-1.65 3.37-5.02 5.5-8.82 5.5S4.83 15.37 3.18 12A9.77 9.77 0 0 1 12 6.5m0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 5a2.5 2.5 0 0 1 0 5a2.5 2.5 0 0 1 0-5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5s4.5-2.02 4.5-4.5s-2.02-4.5-4.5-4.5z" /></svg>
                                                <button>View</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table >
                    {
                        isHistoryClicked &&
                        <div className='w-[35rem] m-auto flex flex-col gap-4 mt-7 bg-gray-400 p-6'>
                            <h2 className='text-white'>History</h2>
                            {
                                appointmentHistory.map(patient => (
                                    <div className='bg-gray-500 p-2 text-white rounded'>
                                        <p>{patient.firstname} {patient.lastname} has finished the appointment.</p>
                                    </div>
                                ))
                            }
                        </div>
                    }
                </div >
            </div >
        </>
    );
}

export default Appointments;