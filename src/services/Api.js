import axios from "axios";
export const Api = axios.create({
    baseURL: 'api/v1/',
    withCredentials: true
})

Api.processError = (err) => {
    throw Error(err.message)
}
