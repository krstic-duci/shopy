<template>
  <div :class="$style.category__wrapper">
    <h2>Categories</h2>
    <h1>{{filterInside}}</h1>
    <h1>{{noFilterPaginationProp}}</h1>
    <ul :class="$style.category__wrapper__list">

     <li
      v-for="(entry, index) in filterList"
      :key="index"
     >
      <span
        @click="filterByCategory(entry)"
        :class="{ [$style.active__filter]:  activeIndex === entry && !filterInside}"
      >
        {{entry}}
      </span>
     </li>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'filtersCategories',
  data () {
    return {
      filterList: ['man', 'woman', 'children', 'all'],
      activeIndex: '',
      filterInside: false
    }
  },
  props: {
    noFilterPaginationProp: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    test () {
      this.filterInside = this.noFilterPaginationProp
    },
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
