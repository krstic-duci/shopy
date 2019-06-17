<template>
  <div id="app">
    <the-header></the-header>
    <router-view/>
  </div>
</template>

<script>
import TheHeader from './components/commons/TheHeader'

export default {
  name: 'App',
  components: {
    'the-header': TheHeader
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
}
</style>
