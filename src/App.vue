<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from "./view/Header.vue";
export default {
    data(){
      return {
        message: ['How are you', 'Myo Min Thu']
      }
    },
    components:{Header}
}
</script>

<template>
  <Header></Header>
  <router-view></router-view>
</template>

<style scoped>

</style>
