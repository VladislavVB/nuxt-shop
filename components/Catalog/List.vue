<template>
  <div class="catalog__list">
    <!-- <CatalogCard /> -->
    {{products}}
    
  </div>
</template>
<script>
// import { mapGetters } from "vuex";
export default {
  methods: {
    getProducts() {
      this.$store.dispatch("products/getProducts");
    },
  },
  computed: {
    products() {
      return this.$store.state.products.getProducts
    }
    // ...mapGetters("products", ['getProducts'])
  },
  mounted() {
    this.getProducts();
    // console.log(mapGetters);
    console.log(this.$store);
    console.log(this.$store.getters);
  },
};
</script>
<style lang="scss" scoped>
.catalog {
  &__list {
    width: 84%;
    display: grid;
    // grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 16px 16px;
    grid-auto-flow: row;
  }
}
</style>
