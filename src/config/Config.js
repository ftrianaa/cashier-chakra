import axios from 'axios'

const Api = axios.create({
    baseURL:'http://makeup-api.herokuapp.com/api/v1'
})
export default Api