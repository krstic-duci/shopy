<template>
  <div :class="$style.search__wrapper">
    <h3>Search: </h3>
    <div>
      <input
        type="text"
        placeholder="Search products..."
        v-model="productSearch"
        @keypress.enter="getInputSearchVal"
      >
      <button @click="getInputSearchVal">
        Search Me
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'productsSearch',
  data () {
    return {
      productSearch: ''
    }
  },
  methods: {
    getInputSearchVal () {
      this.$emit('itemSearch', this.productSearch)
      this.productSearch = ''
    }
  }
}
</script>

<style module>
  .search__wrapper {
    background-color: #fff;
    box-shadow: 0 0 6px 1px rgba(66, 184, 131, 0.8);
    padding: 5px;
  }
  .search__wrapper div {
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 10px;
  }
  .search__wrapper div input {
    border-radius: 10px;
    border: 1px solid #d1d1d1;
    padding: 10px;
    outline: 0;
  }
  .search__wrapper div input:focus {
    border: 1px solid rgb(66, 184, 131);
  }
  .search__wrapper div button {
    background: none;
    border-radius: 10px;
    border: 1px solid #d1d1d1;
    cursor: pointer;
    outline: none;
    padding: 10px;
    padding: 5px;
    transition: all 0.3s;
  }
  .search__wrapper div button:hover {
    border: 1px solid rgb(66, 184, 131);
    color: rgb(66, 184, 131);
  }
</style>
