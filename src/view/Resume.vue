<template>
   <section id="resume" class="resume section-show" v data-aos="fade-up"
     data-aos-duration="1000">
    <div class="container">

      <div class="section-title">
        <h2>Resume</h2>
        <p>Check My Resume</p>
      </div>

      <div class="row">
        <div class="col-lg-6">
          <!-- <h3 class="resume-title">Sumary</h3>
          <div class="resume-item pb-0">
            <h4>Alice Barkley</h4>
            <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
            <p>
            <ul>
              <li>Portland par 127,Orlando, FL</li>
              <li>(123) 456-7891</li>
              <li>alice.barkley@example.com</li>
            </ul>
            </p>
          </div> -->

          <h3 class="resume-title">Education</h3>
          <div class="resume-item">
            <h4>Technology University ( 2015 - 2016 )</h4>
            <ul class="mt-4">
              <li>Information Technology ( Monywa )</li>
              <li>VI-BE-IT-25 ( Final year, Expected at February 2021 )</li>
            </ul>
          </div>
          <div class="resume-item">
            <h4>Learning</h4>
            <ul class="mt-4">
              <li>Professional Web Developer ( Fairway Technology )</li>
              <li>Diploma in Python Programming ( National Cyber City )</li>
              <li>Js + React ( Turing Programming Training Center )</li>
              <li>Self Study</li>
            </ul>
          </div>
          <div class="resume-item">
            <h4>PROFESSIONAL SKILL</h4>
            <div class="row">
              <div class="col-lg-6">
                <ul class="mt-4">
                  <li>HTML, CSS</li>
                  <li>Bootstrap 5, Tailwind CSS</li>
                  <li>PHP, Python, JavaScript</li>
                  <li>Laravel, Vue</li>
                  <li>React and Node.js</li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul class="mt-4">
                  <li>MongoDB, MySQL, SQLite</li>
                  <li>Git & Github</li>
                  <li>Server Basic Knowledge</li>
                  <li>Ubuntu OS</li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
        <div class="col-lg-6">
          <h3 class="resume-title">Professional Experience</h3>
          <div class="resume-item">
            <h4>Web Developer ( mid-level )</h4>
            <h5>2023 - Present at UMG Myanmar</h5>
            <p>Applications ******************</p>
            <p v-for="(data, index) in services" :key="index">
              <h5>{{ data?.name }}</h5>
            <ul>
              <li>{{ data?.title }}</li>
              <li>{{ data?.content }}</li>
            </ul>
            </p>

            <p>Websites ******************</p>
            <p>
              <ul>
                <li v-for="(website, index) in websites.links" :key="index">
                  <a :href="website.url" target="_blank" class="text-decoration-none">{{ website.name }}</a>
                </li>
              </ul>
            </p>
          </div>
          
        </div>
      </div>

    </div>
  </section><!-- End Resume Section -->
</template>

<script>
import http from "../service/api.js";

export default {
  data() {
  return {
    services: [],
    websites: []
  }
},

  methods: {
    async fetchServices() {
      try {
        const response = await http.getData("service.json");
        this.services = response.data;
        console.log(this.services);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    },
    async fetchWebsites() {
      try {
        const response = await http.getData("website.json");
        this.websites = response.data;
        console.log(this.websites);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    }
  },
  created() {
    this.fetchServices();
    this.fetchWebsites();
  },
};
</script>