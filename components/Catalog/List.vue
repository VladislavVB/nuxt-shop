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
      sortData: null,
    };
  },
  methods: {
    setCategory(item) {
      this.productListFiltered = this.productListProp.filter(
        (prod) => prod.category === item.id
      );
      this.sortList(this.sortData);
    },
    sortList(item) {
      this.productListFiltered = this.productListFiltered.sort((a, b) =>
        a[item.value] > b[item.value] ? 1 : -1
      );
    },
  },
  watch: {
    selectCategory(newVal, oldVal) {
      this.setCategory(newVal);
    },
    sortProp(newVal, oldVal) {
      this.sortData = newVal;
      this.sortList(newVal);
    },
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
@media (max-width: 1100px) {
  .catalog__list {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media (max-width: 758px) {
  .catalog__list {
    grid-template-columns: 1fr 1fr;
    width: 100%;
  }
}
</style>
