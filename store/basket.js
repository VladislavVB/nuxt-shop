export const state = () => ({
  countProducts: 0,
});

export const mutations = {
  calculateProduct(state) {
    if (localStorage.getItem("basket") != null) {
      state.countProducts = JSON.parse(localStorage.getItem("basket")).length;
    } else {
      state.countProducts = 0;
    }
  },
};
