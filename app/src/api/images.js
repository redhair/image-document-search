import axios from 'axios';

const url = `${process.env.REACT_APP_BASE_URL}images`;

export const getAllImages = () => axios.get(`${url}`);
export const getOneImage = (id) => axios.get(`${url}/${id}`);
export const createImage = (image) => axios.post(`${url}`, { image });