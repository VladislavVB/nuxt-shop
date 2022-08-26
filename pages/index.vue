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

        <div class="catalog__body">
          <SideMenu :category="category" @selectCategory="setCategory" />
          <CatalogList
            :sortProp="sortSelect"
            :productListProp="productList"
            :selectCategory="setCategoryValue"
          />
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
      category: [],
      setCategoryValue: {},
      sort: [
        { value: "price", title: "цене" },
        { value: "rating", title: "популярности" },
      ],
      sortSelect: { value: "price", title: "цене" },
      productList: [],
    };
  },
  async fetch() {
    this.category = await this.$axios.$get(
      `https://frontend-test.idaproject.com/api/product-category`
    );

    this.productList = await this.$axios.$get(
      `https://frontend-test.idaproject.com/api/product`
    );
  },
  methods: {
    selectedOption(item) {
      this.sortSelect = item;
    },
    setCategory(item) {
      this.setCategoryValue = item;
    },
  },
  mounted() {
    document.querySelectorAll(".select__options-item")[0].click();
    setTimeout(() => {
      document.querySelectorAll(".catalog__menu li")[0].click();
    }, 0);
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
