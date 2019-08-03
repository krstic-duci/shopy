<template>
  <div :class="$style.limit__wrapper">
    <h3>Limit: </h3>
    <div>
      <input
        type="radio"
        name="products-limit"
        id="productsLimit-8"
        @click="getInputRadioVal(8)"
      >
      <label for="productsLimit-8">8 Products</label>
    </div>
    <div>
      <input
        type="radio"
        name="products-limit"
        id="productsLimit-16"
        @click="getInputRadioVal(16)"
      >
      <label for="productsLimit-16">16 Products</label>
    </div>
    <div>
      <input
        type="radio"
        name="products-limit"
        id="productsLimit-32"
        @click="getInputRadioVal(32)"
      >
      <label for="productsLimit-32">32 products</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'productsLimit',
  data () {
    return {
      productLimit: 0
    }
  },
  methods: {
    getInputRadioVal (currInputVal) {
      this.productLimit = currInputVal
      this.$emit('itemLimit', this.productLimit)
    }
  }
}
</script>

<style module>
  .limit__wrapper {
    background-color: #fff;
    box-shadow: 0 0 6px 1px rgba(66, 184, 131, 0.8);
    padding: 5px;
    margin-bottom: 20px;
  }
  .limit__wrapper div {
    display: flex;
    justify-content: center;
    margin: 10px 0;
  }
  .limit__wrapper div label {
    cursor: pointer;
    margin-left: 10px;
  }
</style>
