<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <goods></goods> -->
    <v-header></v-header>
    <!-- <ratings></ratings> -->
    <router-view/>
  </div>
</template>

<script>
  import header from './components/header/header'

  export default {
    name: 'App',
    components: {
      'v-header': header
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>
