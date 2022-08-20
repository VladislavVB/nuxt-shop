<template>
  <div class="catalog__list">
    <CatalogCard />
  </div>
</template>
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
