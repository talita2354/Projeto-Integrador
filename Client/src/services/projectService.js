import axios from 'axios';

const API_URL = 'http://localhost:3000/project';


// Envio dos dados como FormData por conta da imagem
export const createProject = (data) => {
  console.log(data);
  return axios.post(API_URL, data, {
    headers: {
      'Content-Type': 'application/json',
    }
  });
};

export const getAllProjects = () => {
  return axios.get(API_URL);
};

export const getProjectById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};
