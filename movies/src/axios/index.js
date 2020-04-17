import axios from 'axios';
import config from '../config'

export default axios.create({
    baseURL:config.apiUrl,
    headers:{
        common:{
            'Authorization':'bearer '+config.token,
            'Content-Type':'application/json;charset=utf-8'
        }
    }


 })

