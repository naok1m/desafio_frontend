import axios from 'axios';

const API_URL = 'http://localhost:8000/api/recognize-plate';

export async function recognizePlate(file) {
  const formData = new FormData();
  formData.append('file', file);

  const response = await axios.post(API_URL, formData);
  
  return response.data;
}