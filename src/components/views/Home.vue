<template>
  <section :class="$style.home__box">
    <div :class="$style.filter__wrapper">
      <!-- FILTERS -->
      <filter-categories />
    </div>
  </section>
</template>

<script>
export default {
  name: 'home',
  components: {
    'filter-categories': () => import('@/components/commons/FilterCategories')
  }
}
</script>

<style module>
  .home__box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .filter__wrapper {
    flex: 1 1 30%;
    max-width: 30%;
  }
</style>
