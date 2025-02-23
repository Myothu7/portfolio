<template>
  <section
    id="services"
    class="services section-show"
    v
    data-aos="fade-up"
    data-aos-duration="1000"
    v-if="!isloading"
  >
    <div class="container">
      <div class="section-title">
        <h2>Services</h2>
        <p>My Services</p>
      </div>

      <div class="row">
        <template v-for="(val, index) in data" :key="index">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch g-3">
            <div class="icon-box">
              <div class="icon">
                <img
                  src="../assets/img/digital-services.png"
                  alt=""
                  class="w-100"
                />
              </div>
              <h4>
                <a href="">{{ val?.name }}</a>
              </h4>
              <ul>
                <li class="text-start">{{ val?.title }}</li>
                <li class="text-start">{{ val?.content }}</li>
              </ul>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
<script>
import http from "../service/api.js";

export default {
  data() {
    return {
      data: [],
      isloading: true,
    };
  },
  methods: {
    async fetchService() {
      try {
        const response = await http.getData("service.json");
        this.data = response.data;
        this.isloading = false;
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    },
  },
  mounted() {
    this.fetchService();
  },
};
</script>

<!-- <script setup>
import { reactive } from "vue";

const data = reactive({
  0: {
    name: "Library Management System as Main PIC",
    title:
      "Developed and maintained a libray management system to enhance user engagement and provide accessible, interactive educational content.",
    content:
      "Collaborated with a team to implement user-friendly features, such as course modules, progress tracking, and quizzes, to improve learning outcomes.",
  },
  1: {
    name: "Training Management System as Second PIC",
    title:
      "Served as the second person in charge, collaborating closely on both front-end and back-end development of a Training Management System to enhance course scheduling, participant tracking, and reporting.",
    content:
      "Contributed to the design and implementation of user-friendly interfaces, ensuring a seamless experience for trainers and trainess.",
  },
  2: {
    name: "Online Learning Platform as Second PIC",
    title:
      "Collaborated with a team to implement user-friendly features, such as course modules, progress tracking, and quizzes, to improve learning outcomes.",
    content:
      "Developed and maintained a learning platform to enchance user engagement and provide accessible, interactive educational content.",
  },
});
</script> -->
