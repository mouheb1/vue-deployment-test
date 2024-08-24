import axios from 'axios'
import { general } from '@/assets/json/config.json'

const axiosInstance = axios.create({
  baseURL: general.apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosInstance
