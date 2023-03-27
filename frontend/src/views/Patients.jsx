import React, { useEffect, useState } from 'react'
import useFetch from '../api/useFetch';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

const Patients = () => {
    const { loading, usersData } = useFetch("http://localhost:3001/patientsdata"); //^ get patients data
    const [patientsData, setPatientsData] = useState([]);
    const [querySearch, setQuerySearch] = useState("");

    useEffect(() => {
        setPatientsData(usersData);
    }, [usersData])


    if (loading) return <h1 className='text-2xl font-semibold'>Loading...</h1>

    return (
        <>
            <Header />
            <div className='flex h-[calc(100vh_-_3.5rem)]'>
                <div className='flex-2'>
                    <SideBar />
                </div>

                {/* PATIENTS WRAPPER */}
                <div className='p-4 w-full'>
                    <h1 className='text-2xl font-semibold'>Patient</h1>

                    <div className='flex items-center justify-between p-2 border-b-2 border-black'>
                        <h1>Patient List</h1>
                        <button className='bg-sky-500 text-white py-1 px-2 rounded-md'>+ Add Patient</button>
                    </div>
                    <br />
                    <div className='flex justify-between items-center text-sm'>
                        <div className='flex gap-2'>
                            <div className='border border-gray-600 rounded flex items-center px-2 py-1 gap-2 hover:bg-gray-200 transition-all ease-in delay-75'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="gray" d="M453.547 273.449H372.12v-40.714h81.427v40.714zm0 23.264H372.12v40.714h81.427v-40.714zm0-191.934H372.12v40.713h81.427V104.78zm0 63.978H372.12v40.713h81.427v-40.713zm0 191.934H372.12v40.714h81.427V360.69zm56.242 80.264c-2.326 12.098-16.867 12.388-26.58 12.796H302.326v52.345h-36.119L0 459.566V52.492L267.778 5.904h34.548v46.355h174.66c9.83.407 20.648-.291 29.197 5.583c5.991 8.608 5.41 19.543 5.817 29.43l-.233 302.791c-.29 16.925 1.57 34.2-1.978 50.892zm-296.51-91.256c-16.052-32.57-32.395-64.909-48.39-97.48c15.82-31.698 31.408-63.512 46.937-95.327c-13.203.64-26.406 1.454-39.55 2.385c-9.83 23.904-21.288 47.169-28.965 71.888c-7.154-23.323-16.634-45.774-25.3-68.515c-12.796.698-25.592 1.454-38.387 2.21c13.493 29.78 27.86 59.15 40.946 89.104c-15.413 29.081-29.837 58.57-44.785 87.825c12.737.523 25.475 1.047 38.212 1.221c9.074-23.148 20.357-45.424 28.267-69.038c7.096 25.359 19.135 48.798 29.023 73.051c14.017.99 27.976 1.862 41.993 2.676zM484.26 79.882H302.326v24.897h46.53v40.713h-46.53v23.265h46.53v40.713h-46.53v23.265h46.53v40.714h-46.53v23.264h46.53v40.714h-46.53v23.264h46.53v40.714h-46.53v26.897H484.26V79.882z" /></svg>
                                <button >Excel</button>
                            </div>
                            <div className='border border-gray-600 rounded flex items-center px-2 py-1 gap-1 hover:bg-gray-200 transition-all ease-in delay-75'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="gray" d="M8.267 14.68c-.184 0-.308.018-.372.036v1.178c.076.018.171.023.302.023c.479 0 .774-.242.774-.651c0-.366-.254-.586-.704-.586zm3.487.012c-.2 0-.33.018-.407.036v2.61c.077.018.201.018.313.018c.817.006 1.349-.444 1.349-1.396c.006-.83-.479-1.268-1.255-1.268z" /><path fill="gray" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9.498 16.19c-.309.29-.765.42-1.296.42a2.23 2.23 0 0 1-.308-.018v1.426H7v-3.936A7.558 7.558 0 0 1 8.219 14c.557 0 .953.106 1.22.319c.254.202.426.533.426.923c-.001.392-.131.723-.367.948zm3.807 1.355c-.42.349-1.059.515-1.84.515c-.468 0-.799-.03-1.024-.06v-3.917A7.947 7.947 0 0 1 11.66 14c.757 0 1.249.136 1.633.426c.415.308.675.799.675 1.504c0 .763-.279 1.29-.663 1.615zM17 14.77h-1.532v.911H16.9v.734h-1.432v1.604h-.906V14.03H17v.74zM14 9h-1V4l5 5h-4z" /></svg>
                                <button>PDF</button>
                            </div>
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder='Search'
                                className='border border-[#0AC1C9] focus:bg-sky-100 transition-all delay-75 ease-in outline-none px-2 py-1 rounded'
                                value={querySearch}
                                onChange={e => {
                                    setQuerySearch(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <br />
                    <table className='w-full border-collapse border border-gray-400'>
                        <thead className='bg-gray-200'>
                            <tr>
                                <th className='text-left p-2'>Patient</th>
                                <th className='text-left p-2'>Birhtday</th>
                                <th className='text-left p-2'>Address</th>
                                <th className='text-left p-2'>Age</th>
                                <th className='text-left p-2'>Contact</th>
                                <th className='text-left p-2'>Email</th>
                                <th className='text-left p-2'>Status</th>
                                <th className='text-left p-2'>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                patientsData.filter(patient => patient.firstname.toLowerCase().includes(querySearch) ||
                                    patient.middlename.toLowerCase().includes(querySearch) ||
                                    patient.lastname.toLowerCase().includes(querySearch) ||
                                    patient.email.toLowerCase().includes(querySearch) ||
                                    querySearch === "")
                                    .map(patient => {
                                        return (
                                            <tr key={patient.patientID} >
                                                <td className='p-2'>{patient.firstname} {patient.middlename} {patient.lastname}</td>
                                                <td className='p-2'>{patient.birthday}</td>
                                                <td className='p-2'>{patient.address}</td>
                                                <td className='p-2'>{patient.age}</td>
                                                <td className='p-2'>{patient.contactNumber}</td>
                                                <td className='p-2'>{patient.email}</td>
                                                <td className='p-2'>{patient.blocked}</td>
                                                <td className='p-2 flex gap-2'>
                                                    <button className='bg-blue-500 py-1 px-2 text-white rounded'>Edit</button>
                                                    <button className='bg-gray-500 py-1 px-2 text-white rounded'>View</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                            }
                        </tbody>
                    </table>


                    {/* PAGINATION CONTAINER */}
                    <div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Patients;