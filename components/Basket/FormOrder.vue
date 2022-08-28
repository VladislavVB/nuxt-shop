<template>
  <div class="form__wrapper">
    <form @submit.prevent="sendForm">
      <h6>Оформить заказ</h6>
      <div class="inputs">
        <div :class="{ error: !nameValidation }" class="input__wrapper">
          <span :class="{ active: !nameValidation }">Обязательное поле</span>
          <input v-model="name" type="text" placeholder="Ваше имя" />
        </div>
        <div :class="{ error: !phoneValidation }" class="input__wrapper">
          <span :class="{ active: !phoneValidation }">Обязательное поле</span>

          <input
            v-model="phone"
            type="text"
            v-mask="'+7 (###) ###-##-##'"
            placeholder="Телефон"
          />
        </div>
        <div :class="{ error: !emailValidation }" class="input__wrapper">
          <span :class="{ active: !emailValidation }">Обязательное поле</span>

          <input v-model="email" type="text" placeholder="Адрес" />
        </div>
      </div>
      <button type="submit" class="btn">Отправить</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
      email: "",
      flagErrors: false,
    };
  },
  methods: {
    sendForm() {
      this.flagErrors = true;
      if (this.nameValidation && this.phoneValidation && this.emailValidation) {
        console.log("send");
        const sendData = {
          name: this.name,
          phone: this.phone,
          email: this.email,
          basket: JSON.parse(localStorage.getItem("basket")),
        };
        console.log(sendData);
        this.name = "";
        this.phone = "";
        this.email = "";
        this.$emit("sendFrom");
        // this.name = "";
        // this.phone = "";
        // this.email = "";
        // this.flagErrors = false;
      }
    },
  },
  computed: {
    nameValidation() {
      if (this.flagErrors) {
        return this.name.length > 2;
      } else {
        return true;
      }
    },
    phoneValidation() {
      if (this.flagErrors) {
        return this.phone.length > 17;
      } else {
        return true;
      }
    },
    emailValidation() {
      if (this.flagErrors) {
        return this.email.length > 2;
      } else {
        return true;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.inputs {
  display: flex;
  flex-direction: column;
}
.form {
  &__wrapper {
    h6 {
      font-size: 18px;
      line-height: 24px;
      color: #59606d;
      margin-bottom: 16px;
    }
  }
}
.input {
  &__wrapper {
    display: flex;
    width: 100%;
    position: relative;
    &.error {
      input {
        color: rgba(160, 0, 0, 0.616);
        border: 1px solid rgba(160, 0, 0, 0.616);
      }
    }
    span {
      visibility: hidden;
      opacity: 0;
      background-color: #fff;
      transition: 0.3s;
      position: absolute;
      font-size: 14px;
      top: -14px;
      left: 44px;
      color: rgba(160, 0, 0, 0.616);

      &.active {
        visibility: visible;
        opacity: 1;
        font-size: 14px;
        top: -14px;
        left: 14px;
      }
    }
    input {
      background: #f8f8f8;
      border-radius: 8px;
      padding: 14px;
      border: none;
      width: 100%;
      margin-bottom: 16px;
      font-size: 16px;
      line-height: 20px;
      border: 1px solid transparent;
      transition: 0.3s;
      &::placeholder {
        color: #959dad;
        font-size: 16px;
        line-height: 20px;
      }
      &:focus {
        outline: none;
      }
    }
  }
}
</style>
