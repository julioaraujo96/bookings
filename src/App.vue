<template>
  <main>
    <Navigation />
    <router-view></router-view>
  </main>
</template>

<script>
import { RouterView } from 'vue-router';
import Navigation from './components/TheNavigation.vue';

export default {
  data(){
    return{
      text: 'Hello World'
    }
  },
  components: {
    RouterView,
    Navigation,
    }
}
</script>

<style>
  html {
    background-color: #f5f6fa;
    font-family: Roboto, sans-serif;
  }

  .combobox > div > input{
    min-height: 40px;
  }
</style>
