import Axios from 'axios';

export const axios = Axios.create({
    baseURL: "https://covid-relief-backend-karnataka.herokuapp.com/api",
});
