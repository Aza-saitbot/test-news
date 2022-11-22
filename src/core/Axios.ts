import axios from 'axios';

const apiKey = '376476a703354cc8ab9a83635dd11c49';

const Axios = axios.create({
    baseURL: 'https://newsapi.org',
    headers: {
        Authorization: apiKey,
    },
});

export { Axios };