<template>
  <div :class="$style.clear__all__filters__wrapper">
    <button
      :class="$style.clear__all__filters"
      @click="resetFilters"
    >
      Clear All Filters
    </button>
  </div>
</template>

<script>
export default {
  name: 'productsFilters',
  methods: {
    resetFilters () {
      this.$router.go('0')
    }
  }
}
</script>

<style module>
  .clear__all__filters__wrapper {
    margin-top: 20px;
    background-color: #ffffff;
    box-shadow: 0 0 6px 1px #ff0000;
    padding: 15px;
  }
  .clear__all__filters {
    color: #ff0000;
    text-decoration: underline;
    position: relative;
    border: 0;
    outline: 0;
    background: transparent;
    cursor: pointer;
  }
  .clear__all__filters:before {
    content: 'X';
    color: #ff0000;
  }
</style>
