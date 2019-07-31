<template>
  <div :class="$style.about__alumni__wrapper">
    <p>
      Company Alumni Help - children of About
      <br />
      <br />
      Different <code>router-view</code>
    </p>
  </div>
</template>

<script>
export default {
  name: 'aboutAlumniHelp'
}
</script>

<style module>
  .about__alumni__wrapper {
    margin-top: 20px;
    border: 1px solid #d1d1d1;
  }
</style>
