import axios from 'axios';

const ax = axios.create({
    baseURL: `http://localhost:9090`,
});

export default ax;
