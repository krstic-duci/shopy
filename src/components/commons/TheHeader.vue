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

    <!-- Products -->
    <router-link
      to="/products"
      :class="$style.nav__link"
    >
      Products
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style module>
  .nav__box {
    padding: 15px;
    margin: 10px 0 20px;
  }
  .nav__link {
    margin-left: 25px;
    font-size: 18px;
    text-decoration: none;
    padding: 10px;
    color: #42b883;
    transition: color .3s ease-in-out;
  }
  .nav__link:hover {
    color: #f48924;
    text-decoration: underline;
  }
</style>
