import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 85xmbusitr-RNyxoh8bcWhO5YgqDkxtpVAY8L_OiSx0',
    }
});