import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-d8c27.firebaseio.com/'
});

export default instance;