<template>
  <div>
    <header class="header__wrapper">
      <div class="container">
        <div class="header">
          <nuxt-link to="/" class="header__logo">TestList</nuxt-link>
          <div class="header__basket">
            <div class="header__basket-counter">11</div>
            <img src="../assets/image/cart.png" alt="" />
          </div>
        </div>
      </div>
    </header>
    <div :style="`margin-top: ${heightHeder}px`"></div>
    <Nuxt />
  </div>
</template>
<script>
export default {
  name: 'default-layouts',
  computed: {
    heightHeder() {
      // const hederWrapper = element.querySelector('.header__wrapper');
      // console.log(hederWrapper.style.height);
      // return hederWrapper.style.height
      return 66
    }
  }
}
</script>
<style lang="scss">
.header {
  &__wrapper {
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 0px 0px 8px 8px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 100;
    background-color: #fff;
    .header {
      display: flex;
      height: 66px;
      justify-content: space-between;
      align-items: center;
      &__logo {
        color: #59606d;
        font-weight: 700;
      }
      &__basket {
        position: relative;
        width: 32px;
        height: 32px;
        cursor: pointer;
        img {
          width: 100%;
          object-fit: cover;
        }
        &-counter {
          position: absolute;
          width: 12px;
          height: 12px;
          background-color: #959dad;
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 100%;
          right: 0;
          top: 0;
          font-size: 8px;
        }
      }
    }
  }
}
</style>
