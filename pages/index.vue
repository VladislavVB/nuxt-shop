<template>
  <div class="catalog__wrapper">
    <div class="container">
      <div class="catalog">
        <div class="catalog__hedaer">
          <h1>Каталог</h1>
          <div class="catalog__hedaer-sort">
            Сортировать по: <Select :options="sort" />
          </div>
        </div>
        <div class="catalog__body">
          <catalog-menu :category="category" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CatalogMenu from "~/components/CatalogMenu.vue";
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
        {value: 'price', title: 'По цене'},
        {value: 'popular', title: 'По популярности'},
      ]
    };
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
      h1 {
        font-size: 32px;
        font-weight: 700;
        line-height: 41px;
      }
    }
  }
}
</style>
