<template>
  <p
    :class="$style.loading__text"
    v-if="loadingProp"
  >
    Please wait while we fetch the product for you...
  </p>
</template>

<script>
export default {
  props: {
    loadingProp: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style module>
  .loading__text {
    color: #ff0000;
  }
</style>
