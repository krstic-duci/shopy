<template>
  <nav :class="$style.nav__box">

    <!-- Home -->
    <router-link
      to="/"
      :class="$style.nav__link"
    >
      Home
    </router-link>

    <!-- About -->
    <router-link
      to="/about"
      :class="$style.nav__link"
    >
      About
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style module>
  .nav__link {
    margin-left: 15px;
  }
</style>
