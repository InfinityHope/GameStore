import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api/',
    headers: {
        Authorization: JSON.parse(localStorage.getItem('authData') || '{}')
            .token
            ? 'Bearer ' +
              JSON.parse(localStorage.getItem('authData') || '{}').token
            : '',
        'Content-Type': 'application/json',
    },
})

export default axiosInstance
