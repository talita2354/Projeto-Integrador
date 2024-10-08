import axios from 'axios';

const API_URL = 'http://localhost:3000/developer';


// Envio dos dados como FormData por conta da imagem
export const createDeveloper = (formData) => {
  return axios.post(API_URL, formData, {
    headers: {
      'Content-Type': 'application/json',
    }
  });
};

export const getAllDeveloper = () => {
  return axios.get(API_URL);
};

export const getDeveloperById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};
