import { createWebHistory, createRouter } from 'vue-router'

import About from '../view/About.vue';
import Resume from '../view/Resume.vue'
import Service from '../view/Service.vue'
import Contact from '../view/Contact.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/about', name:'about', component: About },
    { path: '/resume', name:'resume', component: Resume },
    { path: '/service', name:'service', component: Service },
    { path: '/contact', name:'contact', component: Contact},
  
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 })
      }, 200)
    })
  }
})

export default router;