<template>
  <div class="card__wrapper">
    <div class="card__hoode">
      <div class="card__hoode-raiting"></div>
      <div class="card__hoode-basket"></div>
    </div>
    <div class="card__image"><img src="" alt="" /></div>
    <div class="card__desc">
      <h6></h6>
      <h5>1111</h5>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      card: {
        photo: "",
        name: "",
        price: 11111111,
        raiting: 1,
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.card {
  &__wrapper {
    background: #ffffff;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    height: 272px;
    transition: 0.3s;
    // &:hover {
    // }
  }
}
</style>
