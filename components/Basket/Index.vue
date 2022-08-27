<template>
  <div class="basket__wrapper" :class="{ active: showProp }">
    <div @click.stop="hideBasket" class="basket__bg"></div>
    <div class="basket__block">
      <div class="basket__head">
        <h2>Корзина</h2>
        <img
          @click.stop="hideBasket"
          class="close"
          src="./../../assets/image/close.png"
          alt=""
        />
      </div>
      <div v-if="products.length" class="basket__content-wrapper">
        <h5>Товары в корзине</h5>
        <div class="basket__content">
          <BasketCard
            @delCard="delCardLoc"
            v-for="(item, index) in products"
            :key="index"
            :card="item"
          />
        </div>
      </div>
      <BasketFormOrder v-if="products.length" />
      <div class="basket__notfound" v-else>
        <p>Пока что вы ничего не добавили в корзину.</p>
        <button @click.stop="hideBasket" class="btn">Перейти к выбору</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["showProp"],
  data() {
    return {
      products: [],
    };
  },
  methods: {
    hideBasket() {
      this.$emit("hide");
    },
    delCardLoc(item) {
      let products = JSON.parse(localStorage.getItem("basket"));
      products.forEach((elem, index) => {
        if (elem.id === item.id) {
          products.splice(index, 1);
        }
      });
      this.products = products
      localStorage.setItem('basket', JSON.stringify(products))
      this.$store.commit("basket/calculateProduct");

    },
  },
  watch: {
    showProp() {
      if (localStorage.getItem("basket") === null) {
        localStorage.setItem("basket", "[]");
      }
      // this.$store.commit("basket/calculateProduct");

      this.products = JSON.parse(localStorage.getItem("basket"));
    },
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
  &__notfound {
    p {
      margin-bottom: 24px;
    }
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
    box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px 0px 0px 8px;
    z-index: 1001;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 0;
    }
    .basket {
      &__head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;
        h2 {
          font-weight: 700;
          font-size: 32px;
          line-height: 41px;
        }
        .close {
          cursor: pointer;
          transition: 0.3s;
          &:hover {
            transform: scale(1.1);
          }
        }
      }
      &__content {
        &-wrapper {
          h5 {
            font-size: 18px;
            line-height: 23px;
            font-weight: 400;
            color: #59606d;
            margin-bottom: 16px;
          }
        }
      }
    }
  }
}
</style>
