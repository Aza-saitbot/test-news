import axios from 'axios';

const apiKey = '7f3deed720e24f85a00575ec0a6374fb';

const Axios = axios.create({
    baseURL: 'https://newsapi.org',
    headers: {
        Authorization: apiKey,
    },
});

export { Axios };