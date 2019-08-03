<template>
  <div :class="$style.about__alumni__wrapper">
    <p>
      <router-link :to="{ name: 'aboutView' }">Back to About</router-link>
    </p>
    <p>
      Company Alumni - children of About
      <br />
      <br />
      Different <code>router-view</code>
    </p>
  </div>
</template>

<script>
export default {
  name: 'aboutAlumni'
}
</script>

<style module>
  .about__alumni__wrapper {
    margin-top: 20px;
    border: 1px solid #ff0000;
  }
</style>
