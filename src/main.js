import { createApp } from 'vue'
import App from './App.vue'
import router  from './router';
// template
import './assets/js/script.js';   
import './assets/css/style.css';
// end template

// addtional install packages
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS
import 'boxicons/css/boxicons.min.css'; // Import Boxicons CSS

AOS.init();

createApp(App).use(router).mount('#app');