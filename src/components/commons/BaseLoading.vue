<template functional>
  <p
    :class="$style.loading__text"
    v-show="props.loadingProp"
  >
    Please wait while we fetch the products for you...
  </p>
</template>

<style module>
  .loading__text {
    color: #ff0000;
  }
</style>
