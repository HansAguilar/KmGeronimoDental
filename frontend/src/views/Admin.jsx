import React,{useEffect, useState} from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import axios from 'axios';

const Admin = () => {
    const [adminList, setAdminList] = useState([]);
    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const handleOnChange = (e) =>{
        setUser({...user, [e.target.name]:e.target.value})
    }
    console.log(user)
    const fetchAdmin = async() =>{
        try {
            const response = await axios.get("http://localhost:3001/");
            setAdminList(response.data.message)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(function(){
        fetchAdmin();
    });
    return (
        <>
            <Header />
            <div className='flex h-[calc(100vh_-_3.5rem)]'>
                <div className='flex-2'>
                    <SideBar />
                </div>

                
            </div>
            <table>
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Contact Number</th>
                            <th>Age</th>
                            <th>Birthday</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            adminList.map((admin)=>
                                <tr>
                                    <td>{admin.firstname} {admin.middlename} {admin.lastname}</td>
                                    <td>{admin.contactNumber}</td>
                                    <td>{admin.age}</td>
                                    <td>{admin.birthday}</td>
                                    <td><button className=' bg-blue-600 '>Active</button></td>
                                    <td><button className=' bg-green-500'>Edit</button>&nbsp;<button className=' bg-red-400'>Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>

                <input type="text" name='username' placeholder='username' onChange={(e)=>handleOnChange(e)}/>
                <input type="password" name='password' placeholder='password' onChange={(e)=>handleOnChange(e)}/>
        </>
    );
}

export default Admin;