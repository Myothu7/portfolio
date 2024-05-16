import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/js/script.js';  // template js
import router  from './router';
import './assets/css/style.css';
createApp(App).use(router).mount('#app');
