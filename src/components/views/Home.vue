<template>
  <section :class="$style.home__box">

    <!-- HOT DEALS PRODUCTS -->
    <loading-text
      v-if="hotDealsProducts.length && loading"
      :loadingProp='loading'
    >
    </loading-text>
    <div
      v-else
      :class="$style.hot__deals__wrapper"
    >
      <section
        v-for="elem in hotDealsProducts"
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
import { getHotDeals } from '@/api/Products'

export default {
  name: 'homeView',
  data () {
    return {
      loading: true,
      hotDealsProducts: []
    }
  },
  components: {
    'loading-text': () => import('@/components/commons/BaseLoading')
  },
  mounted () {
    this.fetchHotDeals()
  },
  methods: {
    fetchHotDeals () {
      getHotDeals()
        .then(response => {
          this.hotDealsProducts = response
        })
        .catch(err => {
          console.error('Cannot fetch products', err)
        })
        .finally(() => {
          this.loading = false
        })
    }
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
