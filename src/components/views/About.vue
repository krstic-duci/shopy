<template>
  <div>

    <section>
      <p>More Info about us can be find here:</p>

      <router-link
        :to="{ name: 'aboutCompany' }"
        :class="$style.about__link"
      >
        Company Info
      </router-link>
      <router-link
        :to="{ name: 'aboutAlumni' }"
        :class="$style.about__link"
      >
        Company Alumni
      </router-link>

    </section>

    <!-- About Company -->
    <router-view></router-view>

    <!-- About Alumni -->
    <router-view name="alumniRouterView"></router-view>
  </div>
</template>

<script>
export default {
  name: 'aboutView'
}
</script>

<style module>
  .about__link {
    margin-left: 15px;
  }
</style>
