<template>
  <div class="catalog__list">
    <CatalogCard
      v-for="product in productListFiltered"
      :key="product.id"
      :card="product"
    />
  </div>
</template>
<script>
export default {
  props: ["selectCategory", "productListProp", "sortProp"],
  data() {
    return {
      productListFiltered: this.productListProp,
      
    };
  },
  methods: {
    setCategory(item) {
      this.productListFiltered = this.productListProp.filter(
        (prod) => prod.category === item.id
      );
    },
    sortList(item) {
      console.log(this.productListFiltered);
      // this.productListFiltered.sort()
      // this.productListFiltered.sort((a, b) => console.log(a, b))
      this.productListFiltered = this.productListFiltered.sort((a, b) => a[item.value] > b[item.value] ? 1 : -1);
    }
  },
  watch: {
    selectCategory(newVal, oldVal) {
      this.setCategory(newVal);
    },
    sortProp(newVal, oldVal) {
      this.sortList(newVal)
    }
  },
};
</script>
<style lang="scss" scoped>
.catalog {
  &__list {
    width: 84%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 16px 16px;
    grid-auto-flow: row;
  }
}
</style>
