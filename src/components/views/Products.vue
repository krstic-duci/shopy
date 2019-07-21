<template>
  <div class="products">
    <h1>This is a Products page</h1>

    <p
      :class="$style.loading__text"
      v-if="loading"
    >
      Please wait while we fetch the product for you...
    </p>

    <section
      v-if="products.length && !loading"
      :class="$style.products__wrapper"
    >
      <div
        v-for="elem in products"
        :key="elem.id"
        :class="$style.product__card"
      >
        <h4>{{elem.name}}</h4>
        <p>$ {{elem.price}}</p>
        <p>{{elem.category}}</p>
        <p>{{elem.size}}</p>
        <router-link
          :to="{name: 'singleProduct', params: {id: elem.id}}"
        >
          See More...
        </router-link>
      </div>
    </section>

  </div>
</template>

<script>
import ProductsApi from '@/api/Products'

export default {
  name: 'products',
  data () {
    return {
      loading: true,
      products: []
    }
  },
  created () {
    ProductsApi.getProducts()
      .then(products => {
        this.products = products
      })
      .catch(err => {
        console.error('Cannot fetch products', err)
      })
      .finally(() => {
        this.loading = false
      })
  }
}
</script>

<style module>
  .loading__text {
    color: red;
  }
  .products__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row wrap;
  }
  .product__card {
    flex: 1 1 48%;
    max-width: 48%;
    background-color: white;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
    margin: 10px 0;
    padding: 5px;
  }
</style>
