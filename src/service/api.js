import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5173/src/db/',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default {
  getData(url) {
    return apiClient.get(url);
  },
  getItem(id) {
    return apiClient.get(`/data/${id}`);
  },
  createItem(item) {
    return apiClient.post('/about.json', item);
  },
  updateData(id,item) {
    return apiClient.put(`/about.json/${id}`, item);
  },
  deleteItem(id) {
    return apiClient.delete(`/items/${id}`);
  }
};
