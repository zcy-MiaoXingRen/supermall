<template>
  <div id="app">
    <router-view></router-view>
    <mains></mains>
  </div>
</template>

<script>
import Mains from 'components/content/main/mains.vue'

export default {
  name: 'App',
  components: {
    mains: Mains
  }
}
</script>

<style scoped>
  @import './assets/css/base.css';
</style>
