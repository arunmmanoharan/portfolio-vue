import axios from 'axios'
import API from '../constants/URL_Constants';

export default() => {
  return axios.create({
    baseURL: API,
    withCredentials: false,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
