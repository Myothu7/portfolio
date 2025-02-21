<template>

  <header id="header" :class="path == '/' ? '': 'header-top'">
    <div class="container">
      <h1 class="text-white">{{ data.name }}</h1>
  
      <div v-html="data.content"></div>

      <nav id="navbar" class="navbar" :class="[click ? navabr : '']">
          <ul class="">
            <li>
              <a class="nav-link" :class="path == '/' ? 'active': ''" @click="click= false">
                <router-link to="/" class="text-decoration-none">Home</router-link>
              </a>
            </li>
            <li>
              <a class="nav-link" :class="path == '/about' ? 'active': ''" @click="click= false"> 
                <router-link :to="{name: 'about'}" class="text-decoration-none">About</router-link>
              </a>
            </li>
            <li>
              <a class="nav-link" :class="path == '/resume' ? 'active': ''" @click="click= false">
                <router-link :to="{name: 'resume'}" class="text-decoration-none">Resume</router-link>
              </a>
            </li>
            <li>
              <a class="nav-link" :class="path == '/services' ? 'active': ''" @click="click= false">
                <router-link :to="{name: 'services'}" class="text-decoration-none">Services</router-link>
              </a>
            </li>
            <li>
              <a class="nav-link" :class="path == '/contact' ? 'active': ''" @click="click= false">
                <router-link :to="{name: 'contact'}" class="text-decoration-none">Contact</router-link> 
              </a>
            </li>
          </ul>
          <i :class="[click ? 'bi-list bi-x':'bi bi-list']" class="mobile-nav-toggle" @click="mobileNavbar()"></i>
          <!-- navbar-mobile bi-list bi-x -->
      </nav><!-- .navbar -->

      <div class="social-links">
          <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
          <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
          <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
          <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
      </div>

    </div>
  </header>
</template>
<script>
import http from '../service/api.js'

  export default {
      props: ['path'],
      data() {
        return {
          data :[],
          navabr : 'navbar-mobile top-0 position-fixed start-0 end-0 bottom-0',
          click : false
        }
      },
      methods: {
        async fetchHome() {
          try {
            const response = await http.getData('home.json');
            this.data = response.data;
          } catch (error) {
            console.error('Error fetching items:', error);
          }
        },
        mobileNavbar() {
          this.click = !this.click;
        }
      },
      created() {
        this.fetchHome();
      }
  }


</script>
