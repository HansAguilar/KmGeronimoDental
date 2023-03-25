import { useState, useEffect } from 'react';
import Axios from 'axios';

const useFetch = (URL) => {
    const [usersData, setUserstsData] = useState([]); //^ Data comes from backend. 
    const [loading, setLoading] = useState(true);

    const getUsersData = async () => {
        try {
            const response = await Axios.get(URL); //^ users JSON data (ENDPOINT)
            setLoading(false);
            return response.data; //^ Data property of the response object. 
        } catch (error) {
            return null;
        }
    };

    useEffect(() => {
        const fetchData = async () => { //^ fetchData asynchronous function. 
            const data = await getUsersData(); //^ wait the getUsersData function result
            setUserstsData(data); //^ Ilagay yung data variable sa useState 
        };
        fetchData(); //^ call fetchData
    }, [URL]);

    return { loading, usersData }
}

export default useFetch;