import axios from "axios";
export const Api = axios.create({
    baseURL: 'api/',
    withCredentials: true
})

Api.processError = (err) => {
    throw Error(err.message)
}
