export default {
  computed: {
    price(value) {
      console.log(11);
      console.log(value);
      // return value.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " ");
    },
  },
};
