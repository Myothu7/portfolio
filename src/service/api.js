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
  },
  email(data) {
    return axios.post('https://api.emailjs.com/api/v1.0/email/send',{
      service_id: 'service_wz5032n',
      template_id: 'template_n1chi5i',
      user_id: '4ZIjyo8lfHkFnL4LB',
      template_params: data
    });
  }
};
