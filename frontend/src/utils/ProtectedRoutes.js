import React, { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import axios from 'axios';

function ProtectedRoutes() {
    const token = localStorage.getItem("token");
    const [loading, setLoading] = useState(true);
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/verify/${token}`);
                if (response.data.message === "verified") {
                    setAuth(true)
                }
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        }
        fetchData();
    }, [token]);

    if (loading) {
        return <h1>loading</h1>;
    }

    return (
        <>
            {
                auth ? <Outlet /> : <Navigate to='/' />
            }
        </>
    )
}

export default ProtectedRoutes;