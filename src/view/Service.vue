<template>
  <section id="services" class="services section-show" v data-aos="fade-up"
     data-aos-duration="1000" v-if="!isloading">
    <div class="container">

      <div class="section-title">
        <h2>Services</h2>
        <p>My Services</p>
      </div>

      <div class="row">
        <template  v-for="(val, index) in data" :key="index">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch g-3">
            <div class="icon-box">
              <div class="icon">
                <img src="../assets/img/digital-services.png" alt="" class="w-100">
              </div>
              <h4><a href="">{{ val?.name }}</a></h4>
              <p>{{ val?.content }}</p>
            </div>
          </div>
        </template>
      </div>

    </div>
  </section>

</template>
<script>
import http from '../service/api.js'

export default {
    data() {
      return {
        data :[],
        isloading: true
      }
    },
    methods: {
      async fetchService() {
        try {
          const response = await http.getData('service.json');
          this.data = response.data;
          this.isloading = false;
        } catch (error) {
          console.error('Error fetching items:', error);
        }
      }
    },
    mounted() {
      this.fetchService();
    }
}
</script>