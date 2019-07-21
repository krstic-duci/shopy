<template>
  <div id="app">
    <the-header></the-header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    'the-header': () => import('@/components/commons/TheHeader')
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #d1d1d1;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
}
</style>
