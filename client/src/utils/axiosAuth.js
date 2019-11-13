import axios from 'axios';

export const axiosAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'http://localhost:5000',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        } 
    })
}