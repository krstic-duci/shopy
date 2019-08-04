<template>
  <div>
    <h1>This is a Products page</h1>

    <loading-text :loadingProp='loading' />

    <section :class="$style.products__box">

      <!-- FILTERS -->
      <div :class="$style.filter__wrapper">
        <!-- Category -->
        <products-category
          @itemCategory='categoryFilter'
        >
        </products-category>
        <!-- Limit -->
        <products-limit
          @itemLimit='limitFilter'
        >
        </products-limit>
        <!-- Search Item -->
        <search-item
          @itemSearch='searchFilter'
        >
        </search-item>
        <!-- Clear Filter -->
        <clear-filter></clear-filter>
      </div>

      <!-- PRODUCTS -->
      <transition name="fade-products" mode="out-in">
        <section
          v-if="filterProducts.length && !loading"
          :class="$style.products__wrapper"
        >
          <div
            v-for="elem in filterProducts"
            :key="elem.id"
            :class="$style.product__card"
          >
            <h4>{{elem.name}}</h4>
            <p>$ {{elem.price}}</p>
            <p>{{elem.category}}</p>
            <p>{{elem.size}}</p>
            <router-link
              :to="{name: 'singleProductView', params: {id: elem.id}}"
            >
              See More...
            </router-link>
          </div>

          <!-- PAGINATION -->
          <div :class="$style.pagination__wrapper">
            <button
              @click="loadPrevProducts()"
              :class="{[$style.pagination__wrapper__no_click]: noPrevClick}"
              :disabled="noPrevClick"
            >
              Prev...
            </button>
            <button
              @click="loadMoreProducts()"
              :class="{[$style.pagination__wrapper__no_click]: noNextClick}"
              :disabled="noNextClick"
            >
              Next...
            </button>
          </div>
        </section>

        <!-- NO FILTER DATA -->
        <section
          v-else
          :class="$style.no__filter__wrapper"
        >
          <p>There are no products for selected filter, please choose another...</p>
        </section>
      </transition>

    </section>
  </div>
</template>

<script>
import { getProducts, getProductsBySearch } from '@/api/Products'

export default {
  name: 'productsView',
  components: {
    'products-category': () => import('@/components/commons/products/ProductsCategory'),
    'products-limit': () => import('@/components/commons/products/ProductsLimit'),
    'search-item': () => import('@/components/commons/products/ProductsSearch'),
    'clear-filter': () => import('@/components/commons/products/ProductsClearFilters'),
    'loading-text': () => import('@/components/commons/BaseLoading')
  },
  data () {
    return {
      paginationNumber: 1,
      limitNumber: 16,
      productsLength: 0,
      noNextClick: false,
      noPrevClick: false,
      loading: true,
      products: [],
      currentFilterCategory: '',
      filterProducts: []
    }
  },
  created () {
    this.initialProducts()
  },
  methods: {
    initialProducts () {
      getProducts(this.paginationNumber, this.limitNumber)
        .then(products => {
          const productRes = products.data
          this.productsLength = products.headers['x-total-count']

          // Keep the reactivity for pagination
          if (this.paginationNumber === 1) {
            this.noPrevClick = true
          } else if ((this.productsLength / this.limitNumber) <= this.paginationNumber) {
            this.noNextClick = true
          }

          // Keep the copy of products from API for filtering
          this.filterProducts = [...productRes]
          // Keep the copy of original array of products for inital load
          this.products = [...this.filterProducts]
        })
        .catch(err => {
          console.error('Cannot fetch products', err)
        })
        .finally(() => {
          this.loading = false
        })
    },
    categoryFilter (value) {
      // Grab the value from ProductsCategory.vue clicked value
      // and store it
      this.currentFilterCategory = value

      // Spread the current array with the loaded data from API
      this.filterProducts = [...this.products]

      // When user select 'all' from Categories
      // don't filter the data
      if (value === 'all') {
        return
      }

      // Filter the data based on user click
      this.filterProducts = this.filterProducts.filter(elem =>
        elem.category === this.currentFilterCategory
      )
    },
    limitFilter (valueLimit) {
      this.limitNumber = valueLimit
      this.initialProducts()
    },
    searchFilter (valueSearch) {
      getProductsBySearch(valueSearch)
        .then(products => {
          this.filterProducts = [...products]
        })
        .catch(err => {
          console.error('Cannot search products', err)
        })
        .finally(() => {
          this.loading = false
        })
    },
    loadPrevProducts () {
      // Cannot have negative pagination
      if (this.paginationNumber <= 0) {
        return
      }
      this.paginationNumber--
      this.initialProducts()
      // Disable next click on button
      this.noNextClick = false
      window.scrollTo(0, 0)
    },
    loadMoreProducts () {
      // If there are no more product to be loaded, do not bother the server
      if ((this.productsLength / this.limitNumber) <= this.paginationNumber) {
        return
      }
      this.paginationNumber++
      this.initialProducts()
      // Disable previous click on button
      this.noPrevClick = false
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style module>
  .products__box {
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
  }
  .filter__wrapper {
    flex: 1 1 28%;
    max-width: 28%;
    position: sticky;
    top: 20px;
    height: 50%;
  }
  .no__filter__wrapper {
    flex: 1 1 70%;
    max-width: 70%;
  }
  .products__wrapper, .filtered__products__wrapper {
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    flex: 1 1 70%;
    max-width: 70%;
    margin-top: -10px;
  }
  .products__wrapper .product__card {
    flex: 1 1 48%;
    max-width: 48%;
    background-color: #fff;
    box-shadow: 0 0 6px 1px rgba(66, 184, 131, 0.8);
    margin: 10px 0;
    padding: 11px;
  }
  .pagination__wrapper {
    margin: 20px 0;
    flex: 1 1 100%;
    position: relative;
  }
  .pagination__wrapper button {
    background: none;
    border: 1px solid #d1d1d1;
    border-radius: 10px;
    color: inherit;
    cursor: pointer;
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: 700;
    letter-spacing: 1px;
    margin: 15px 30px;
    outline: none;
    padding: 25px;
    position: relative;
    text-transform: uppercase;
    transition: all 0.3s;
    width: 150px;
  }
  .pagination__wrapper button:hover {
    color: rgb(66, 184, 131);
    border: 1px solid rgb(66, 184, 131);
  }
  .pagination__wrapper button:after {
    content: '';
    background: #fff;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: all 0.3s;
    width: 0%;
    z-index: -1;
  }
  .pagination__wrapper__no_click {
    cursor: not-allowed !important;
    color: inherit !important;
    opacity: 0.8 !important;
    border: 1px solid #d1d1d1 !important;
  }
</style>
