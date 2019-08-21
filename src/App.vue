<template>
  <div id="app">
    <the-header></the-header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import TheHeader from '@/components/commons/TheHeader'
export default {
  name: 'App',
  components: {
    'the-header': TheHeader
  }
}
</script>

<style>
*, *:after, *:before {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background-color: #FEFDFB;
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

.router-link-exact-active {
  color: #f48924 !important;
  text-decoration: underline !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .15s ease-in-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
