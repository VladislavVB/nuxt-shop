<template>
  <div v-click-outside="closeSelect" class="select__wrapper" :class="{ active: toggleSelect }">
    <div @click="toggleSelectClick" class="select__selected">
      {{ selected.title }}
    </div>
    <div class="select__options">
      <div
        v-for="(item, index) in options"
        :key="index"
        class="select__options-item"
        @click.stop="selectOption(item)"
      >
        По {{ item.title }}
      </div>
    </div>
  </div>
</template>
<script>
import ClickOutside from "vue-click-outside";
export default {
  name: "Select",
  props: ["options", "selected"],
  data() {
    return {
      toggleSelect: false,
    };
  },
  methods: {
    toggleSelectClick() {
      this.toggleSelect = !this.toggleSelect;
    },
    selectOption(item) {
      this.$emit("selectOptionEmit", item);
      this.closeSelect()
    },
    closeSelect() {
      this.toggleSelect = false
    }
  },
  directives: {
    ClickOutside,
  },
};
</script>
<style lang="scss" scoped>
.select {
  &__wrapper {
    position: relative;
    &.active {
      .select__options {
        visibility: visible;
        opacity: 1;
      }
    }
  }
  &__selected {
    cursor: pointer;
    margin-left: 5px;
    color: #59606d;
    font-size: 16px;
    line-height: 21px;
  }
  &__options {
    position: absolute;
    right: 0;
    width: 160px;
    padding-top: 8px;
    padding-bottom: 8px;
    background: #ffffff;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    color: #959dad;
    transition: 0.3s;
    opacity: 0;
    visibility: hidden;
    &-item {
      height: 26px;
      font-size: 14px;
      line-height: 20px;
      display: flex;
      align-items: center;
      cursor: pointer;
      padding-left: 12px;
      padding-right: 12px;
      transition: 0.3;
      &:hover {
        color: #1f1f1f;
        background-color: #f8f8f8;
      }
    }
  }
}
</style>
