<template>
  <section>

    <loading-text :loadingProp='loading' />

    <div v-if="!loading">
      <!-- Back to Products -->
      <section>
        <router-link :to="{name: 'products'}">
          Back To Products...
        </router-link>
      </section>
      <!-- Single Product Details -->
      <section>
        <h3>{{singleProduct.name}}</h3>
        <p>$ {{singleProduct.price}}</p>
      </section>
    </div>

  </section>
</template>

<script>
import ProductsApi from '@/api/Products'

export default {
  name: 'singleProduct',
  data () {
    return {
      loading: true,
      singleProduct: []
    }
  },
  components: {
    'loading-text': () => import('@/components/commons/LoadingText')
  },
  created () {
    ProductsApi.getSingleProduct(this.$route.params.id)
      .then(singleProduct => {
        this.singleProduct = singleProduct
      })
      .catch(err => {
        console.error('Cannot fetch a product', err)
      })
      .finally(() => {
        this.loading = false
      })
  }
}
</script>

<style module>

</style>
