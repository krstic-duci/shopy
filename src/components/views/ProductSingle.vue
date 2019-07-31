<template>
  <section>

    <loading-text :loadingProp='loading' />

    <div v-if="!loading">
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

export default {
  name: 'singleProductView',
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
  components: {
    'loading-text': () => import('@/components/commons/BaseLoading')
  },
  created () {
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
