<template>
  <div class="catalog__menu-wrapper">
    <ul class="catalog__menu">
      <li
        v-for="(item, index) in category"
        :key="index"
        :class="{ active: index == categoryActive }"
        @click="selectCategory(item, index)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "CatalogMenu",
  props: ["category"],
  data() {
    return {
      categoryActive: null,
    };
  },
  methods: {
    selectCategory(item, index) {
      this.categoryActive = index;
      this.$emit("selectCategory", item);
    },
  },
};
</script>
<style lang="scss" scoped>
.catalog__menu {
  list-style: none;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 100px;
  &-wrapper {
    li {
      font-weight: 400;
      display: inline;
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 16px;
      color: #959dad;
      transition: 0.3s;
      cursor: pointer;
      width: fit-content;
      border-bottom: 1px solid transparent;

      &:last-child {
        margin-bottom: 0;
      }
      &:hover {
        color: #59606d;
      }
      &.active {
        color: #1f1f1f !important;
        border-bottom: 1px solid #1f1f1f;
      }
    }
  }
}
</style>
