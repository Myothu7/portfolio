<template>
     <div>
        <Header :path=" $route.fullPath "></Header>
        <router-view></router-view> 
     </div>
</template>

<script>
  import Header from "./view/Header.vue";
  export default {
      components:{Header},
      data(){
        return {
          message: ['How are you', 'Myo Min Thu']
        }
      },
     
  }
</script>

<style>

</style>
