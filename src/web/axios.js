import axios from 'axios';

const serverHost = "192.168.0.200";
console.log("target server ==> " + serverHost);
const ax = axios.create({
    baseURL: `http://${serverHost}:9090`,
});

export default ax;
