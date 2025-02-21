<template>
   <section id="contact" class="contact section-show" v data-aos="fade-up"
     data-aos-duration="1000">
    <div v-if="emailSuccess" class="d-flex position-fixed end-0 top-0">
      <div class="row bg-white p-3 me-2 position-relative d-flex">
        <span @click="emailSuccess = false" class="hover">
          <i class="bi bi-x-lg text-dark position-absolute top-0 end-0 me-1"></i>
        </span>
        <div>
          <i class="bi bi-envelope-at text-dark me-2"></i>
          <span class="text-success fw-bold"> Email sent success</span>
        </div>
      </div>
    </div>

    <div class="container">

      <div class="section-title">
        <h2>Contact</h2>
        <p>Contact Me</p>
      </div>

      <div class="row mt-2">

        <div class="col-md-6 d-flex align-items-stretch">
          <div class="info-box">
            <i class="bx bx-map"></i>
            <h3>My Address</h3>
            <p>{{ about?.information?.address }}</p>
          </div>
        </div>

        <div class="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
          <div class="info-box">
            <i class="bx bx-share-alt"></i>
            <h3>Social Profiles</h3>
            <div class="social-links">
              <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
              <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
              <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
              <a href="#" class="google-plus"><i class="bi bi-skype"></i></a>
              <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>

        <div class="col-md-6 mt-4 d-flex align-items-stretch">
          <div class="info-box">
            <i class="bx bx-envelope"></i>
            <h3>Email Me</h3>
            <p>{{ about?.information?.email }}</p>
          </div>
        </div>
        <div class="col-md-6 mt-4 d-flex align-items-stretch">
          <div class="info-box">
            <i class="bx bx-phone-call"></i>
            <h3>Call Me</h3>
            <p>{{ about?.information?.phone }}</p>
          </div>
        </div>
      </div>
      <div role="form" class="php-email-form mt-4">
        <div class="row">
          <div class="col-md-6 form-group">
            <input v-model="formData.name" type="text" name="name" class="form-control"  placeholder="Your Name" 
            :class="[vaildateShow ? (formData.name == '' ? 'border border-danger' : '') : '']" required>
          </div>
          <div class="col-md-6 form-group mt-3 mt-md-0">
            <input v-model="formData.email" type="email" class="form-control" name="email"  placeholder="Your Email" 
            :class="[vaildateShow ? (formData.email == '' ? 'border border-danger' : '') : '']" required>
          </div>
        </div>
        <div class="form-group mt-3">
          <textarea v-model="formData.message" class="form-control" name="message" rows="5" placeholder="Message"
          :class="[vaildateShow ? (formData.message == '' ? 'border border-danger' : '') : '']" required></textarea>
        </div>
        <div class="my-3">
          <div class="loading">Loading</div>
          <div class="error-message"></div>
          <div class="sent-message">Your message has been sent. Thank you!</div>
        </div>
        <div class="text-center">
          <button @click="sendEmail()" class="send-email">Send Message</button>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import http from '../service/api.js'

  export default {
      data() {
        return {
          about :[],
          formData : {
            name : "", email : "" , message : ""
          },
          vaildateShow : false,
          emailSuccess : false
        }
      },
      computed:{
        showValidate(data) {
          return data != "" ? true : false; 
        },
      },
      methods: {
        validate() {
          if((this.formData.name == '') || (this.formData.email == '') || (this.formData.message == '')){
            return false;
          }else{
          return true;
          }
        },
        async fetchAbout() {
          try {
            const response = await http.getData('about.json');
            this.about = response.data;
          } catch (error) {
            console.error('Error fetching items:', error);
          }
        },
        async sendEmail() {
          this.vaildateShow = true;
          if(this.validate()) {
              this.formData.name = '',this.formData.email = '', this.formData.message = ''
              this.vaildateShow = false
              try{
                const data = {
                  'name' : this.formData.name,
                  'email' : this.formData.email,
                  'message' : this.formData.message
                };
                const response = await http.email(data);
                this.emailSuccess = true;
              }catch (error) {
                console.error('Error fetching items:', error);
                this.emailSuccess = false;
              }
          }
        }
      },
      created() {
        this.fetchAbout();
      }
  }
</script>