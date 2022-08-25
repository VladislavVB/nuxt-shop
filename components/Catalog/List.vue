<template>
  <div class="catalog__list">
    <CatalogCard
      v-for="product in productList"
      :key="product.id"
      :card="product"
    />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      productList: [],
    }
  },
  methods: {
    getProducts() {
      this.$store.dispatch("products/getProducts");
    },
  },
  computed: {
    ...mapGetters({
       getProductsGetters: "products/getProducts",
    }),
  },
  mounted() {
    this.getProducts();
    console.log(this.getProductsGetters);
    this.productList = this.getProductsGetters
    // console.log(mapGetters);
    // console.log(this.$store);
    // console.log(this.$store.getters);
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
