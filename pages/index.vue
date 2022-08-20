<template>
  <div class="catalog__wrapper">
    <div class="container">
      <div class="catalog">
        <div class="catalog__hedaer">
          <h1>Каталог</h1>
          <div class="catalog__hedaer-sort">
            Сортировать по:
            <Select
              :options="sort"
              :selected="sortSelect"
              @selectOptionEmit="selectedOption"
            />
          </div>
        </div>
        {{this.$state}}
        <div class="catalog__body">
          <SideMenu :category="category" />
          <CatalogList />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CatalogMenu from "~/components/SideMenu.vue";
export default {
  components: { CatalogMenu },
  name: "IndexPage",
  data() {
    return {
      category: [
        { id: 1, name: "Рюкзаки" },
        { id: 2, name: "Сумки-мессенджеры" },
        { id: 3, name: "Деловые сумки" },
      ],
      sort: [
        { value: "price", title: "цене" },
        { value: "popular", title: "популярности" },
      ],
      sortSelect: { value: "price", title: "цене" },
    };
  },
  methods: {
    selectedOption(item) {
      this.sortSelect = item;
    },
    getProduct() {
    }
  },
  mounted() {
    this.getProduct()
  },
};
</script>
<style lang="scss" scoped>
.catalog__wrapper {
  padding-top: 32px;
  .catalog {
    &__hedaer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;
      &-sort {
        font-size: 16px;
        line-height: 20px;
        font-weight: 400;
        display: flex;
      }
      h1 {
        font-size: 32px;
        font-weight: 700;
        line-height: 41px;
      }
    }
    &__body {
      display: flex;
      justify-content: space-between;
    }
  }
}

</style>
