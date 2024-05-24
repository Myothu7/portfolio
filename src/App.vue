<template>
     <div>
      <!-- v-if="!($route.fullPath.includes('admin'))" -->
        <div>
          <Header :path=" $route.fullPath "></Header>
        </div>
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
*{
  color: white;
}
</style>
