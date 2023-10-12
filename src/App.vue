<template>
  <div class="">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header.vue';

export default {
  components: {
    'app-header': header
  },
  data() {
    return{
      
    }
  },
}
</script>

<style scoped>

</style>
