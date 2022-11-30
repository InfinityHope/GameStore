import axios from 'axios'
import { useAppSelector } from '../redux/hooks/redux'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api/',
})

axiosInstance.interceptors.request.use(
    (config) => {
        const { token } = useAppSelector((state) => state.auth.authData)
        if (config.headers) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default axiosInstance
