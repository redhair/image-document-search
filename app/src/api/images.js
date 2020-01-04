import axios from 'axios';

const url = `${process.env.REACT_APP_BASE_URL}images`;

export const createImage = image => axios.post(`${url}`, { image });
