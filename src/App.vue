<template>
  <h1> {{ text }}</h1>
  <HelloWorld :title="text"/>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'

export default {
  data(){
    return{
      text: 'Hello World'
    }
  },
  components: {
      HelloWorld
    }
}
</script>

<style scoped>

</style>
