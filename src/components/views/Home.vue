<template>
  <section :class="$style.home__box">

    <!-- Loader -->
    <loading-text></loading-text>

    <!-- HOT DEALS PRODUCTS -->
    <h2>Hot new deals...</h2>

    <div
      :class="$style.hot__deals__wrapper"
    >
      <section
        v-for="elem in allHotProducts"
        :key="elem.id"
        :class="$style.hot__deals__wrapper__item"
      >
        <h4>{{elem.name}}</h4>
        <p>$ {{elem.price}}</p>
        <p>Size: {{elem.size}}</p>
        <router-link :to="{ name: 'singleProductView', params: { id: elem.id } }">
          See new product...
        </router-link>
      </section>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import LoadingText from '@/components/commons/BaseLoading'

export default {
  name: 'homeView',
  components: {
    'loading-text': LoadingText
  },
  data () {
    return {
      loading: true
    }
  },
  computed: {
    ...mapGetters({
      allHotProducts: 'home/ALL_HOT_PRODUCTS'
    }),
    ...mapActions({
      getHotProducts: 'home/GET_HOT_PRODUCTS'
    })
  },
  created () {
    return this.getHotProducts
  }
}
</script>

<style module>
  .hot__deals__wrapper {
    flex: 1 1 100%;
    max-width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 20px;
  }
  .hot__deals__wrapper__item {
    flex: 1 1 33.33%;
    max-width: 33.33%;
    background-color: #fff;
    box-shadow: 0 0 6px 1px rgba(66, 184, 131, 0.8);
    margin: 10px;
    padding: 35px;
  }
</style>
