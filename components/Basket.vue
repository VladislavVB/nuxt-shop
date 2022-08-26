<template>
  <div class="basket__wrapper" :class="{ active: visibleBasket }">
    <div class="basket__bg"></div>
    <div class="basket__block">basket</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visibleBasket: true,
    };
  },
};
</script>
<style lang="scss" scoped>
.basket {
  &__wrapper {
    &.active {
      .basket {
        &__bg {
          visibility: visible;
          opacity: 0.8;
        }
        &__block {
          opacity: 1;
          right: 0;
        }
      }
    }
  }
  &__bg {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #ffffff;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s;
    cursor: pointer;
  }
  &__block {
    position: fixed;
    width: 460px;
    top: 0;
    right: -100%;
    height: 100vh;
    padding: 52px 48px;
    transition: 0.3s;
    opacity: 0;
    background-color: #ffffff;
    z-index: 1001;
  }
}
</style>
