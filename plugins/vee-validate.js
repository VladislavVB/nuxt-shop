import Vue from 'vue';
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import { required, min } from 'vee-validate/dist/rules'

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProviderm', ValidationProvider)

extend('requred',  {
  ...required,
  message: 'Обязательное поле'
})

extend('min',  {
  ...min,
  message: 'Минимум 2 буквы'
})