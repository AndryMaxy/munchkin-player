import axios from 'axios';
import ip from 'ip';

const address = ip.address();

const ax = axios.create({
    baseURL: `http://${address}:9090`,
});

export default ax;
