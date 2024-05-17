import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5173/src/db/',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default {
  getItems(url) {
    return apiClient.get(url);
  },
  getItem(id) {
    return apiClient.get(`/items/${id}`);
  },
  createItem(item) {
    return apiClient.post('/items', item);
  },
  updateItem(id, item) {
    return apiClient.put(`/items/${id}`, item);
  },
  deleteItem(id) {
    return apiClient.delete(`/items/${id}`);
  }
};
