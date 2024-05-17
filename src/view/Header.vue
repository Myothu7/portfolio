<template>
  <header id="header" :class="path == '/' ? '': 'header-top'">
    <div class="container">
      <h1 class="text-white">{{ data.name }}</h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a> -->
      <!-- <h2 class="text-white">{{ data.content }}</h2> -->
      <div v-html="data.content"></div>

      <nav id="navbar" class="navbar">
          <ul>
            <li>
              <a class="nav-link" :class="path == '/' ? 'active': ''">
                <router-link to="/" class="text-decoration-none">Home</router-link>
              </a>
            </li>
            <li>
              <a class="nav-link" :class="path == '/about' ? 'active': ''"> 
                <router-link :to="{name: 'about'}" class="text-decoration-none">About</router-link>
              </a>
            </li>
            <li>
              <a class="nav-link" :class="path == '/resume' ? 'active': ''">
                <router-link :to="{name: 'resume'}" class="text-decoration-none">Resume</router-link>
              </a>
            </li>
            <li>
              <a class="nav-link" :class="path == '/service' ? 'active': ''">
                <router-link :to="{name: 'service'}" class="text-decoration-none">Services</router-link>
              </a>
            </li>
            <li><a class="nav-link" :class="path == '/portfolio' ? 'active': ''">Portfolio</a></li>
            <li>
              <a class="nav-link" :class="path == '/contact' ? 'active': ''">
                <router-link :to="{name: 'contact'}" class="text-decoration-none">Contact</router-link> 
              </a>
            </li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
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
          data :[]
        }
      },
      methods: {
        async fetchItems() {
          try {
            const response = await http.getItems('home.json');
            this.data = response.data;
          } catch (error) {
            console.error('Error fetching items:', error);
          }
        },
      },
      created() {
        this.fetchItems();
      }
  }
</script>
