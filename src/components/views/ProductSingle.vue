<template>
  <section>

    <!-- Loader -->
    <loading-text></loading-text>

    <div v-show="!loading">
      <!-- Back -->
      <section>
        <a
          @click="{backLink}"
          :class="$style.back__link"
        >
          Back...
        </a>
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
import { getSingleProduct } from '@/api/Products'
import LoadingText from '@/components/commons/BaseLoading'

export default {
  name: 'singleProductView',
  components: {
    'loading-text': LoadingText
  },
  data () {
    return {
      loading: true,
      singleProduct: []
    }
  },
  computed: {
    backLink () {
      return this.$router.go(-1)
    }
  },
  created () {
    //
    // @description - Call /products/:id for fetching the single products details
    // @param - { String } this.$route.params.id (The random uuid from db.json for that product)
    //
    getSingleProduct(this.$route.params.id)
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
  .back__link {
    text-decoration: underline;
    cursor: pointer;
  }
</style>
