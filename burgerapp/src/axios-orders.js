import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerapp-74891.firebaseio.com/'
});

export default instance;