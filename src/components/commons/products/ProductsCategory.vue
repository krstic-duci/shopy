<template>
  <div :class="$style.category__wrapper">
    <h3>Categories: </h3>
    <!-- <h1>{{onChildFilter}}</h1> -->
    <ul :class="$style.category__wrapper__list">

     <li
      v-for="(entry, index) in filterList"
      :key="index"
     >
      <span
        @click="filterByCategory(entry)"
        :class="{
          [$style.active__filter]: activeIndex === entry
        }"
      >
        {{entry}}
      </span>
     </li>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'productsCategories',
  data () {
    return {
      filterList: ['man', 'woman', 'children', 'all'],
      activeIndex: ''
    }
  },
  methods: {
    filterByCategory (itemCategory) {
      this.activeIndex = itemCategory
      this.$emit('itemCategory', itemCategory)
    }
  }
}
</script>

<style module>
  .category__wrapper {
    background-color: #fff;
    box-shadow: 0 0 6px 1px rgba(66, 184, 131, 0.8);
    padding: 5px;
    margin-bottom: 20px;
  }
  .category__wrapper__list {
    list-style-type: none;
    padding-left: 0;
  }
  .category__wrapper__list li {
    margin: 15px 0;
  }
  .category__wrapper__list li span {
    padding: 5px 20px;
    cursor: pointer;
  }
  .category__wrapper__list li span:hover {
    text-decoration: underline;
  }
  .active__filter {
    color: #f48924;
    text-decoration: underline;
  }
</style>
