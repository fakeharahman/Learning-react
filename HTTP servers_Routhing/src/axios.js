import axios from 'axios'

const instance = axios.create({
    baseURL: "http://jsonplaceholder.typicode.com"
})

instance.defaults.headers.common['AUTHERIZATION'] = "AUTH TOKEN INSTANCE";

export default instance
