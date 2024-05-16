import { createWebHistory, createRouter } from 'vue-router'

import Header from '../view/Header.vue';
import About from '../view/About.vue';
// import HelloWorld from '../components/HelloWorld.vue';

// const routes = [
//   { path: '/test', component: Header },
//   // { path: '/about', component: AboutView },
// ]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // { path: '/', component: Header },
    { path: '/about', name:'about', component: About },
    // {path: '/helloworld', component: HelloWorld}
  ],
})

export default router;