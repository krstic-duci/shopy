<template>
  <section>
    <p
      :class="$style.loading__text"
      v-if="loading"
    >
      Please wait while we fetch the products for you...
    </p>

    <div v-if="!loading">
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
  },
  computed: {
    test () {
      return this.$route.params.id
    }
  }
}
</script>

<style module>
  .loading__text {
    color: red;
  }
</style>
