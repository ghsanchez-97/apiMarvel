import axios from 'axios'
import constants from './constants.utils'


export default function http({ headers = null }) {
    return axios.create({
        baseURL: constants.BASEURL,
        headers: { ...headers }
    })
}