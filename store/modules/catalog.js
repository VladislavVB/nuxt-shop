

import axios from "axios";
export const state = {
  loading: false,
  products: null,
};

export const mutationsType = {};
export const actionsType = {
  getProduct: "[catalog] getProduct",
};
export const gettersType = {};

export const mutations = {};
export const actions = {
  getProduct(context, commit) {
    console.log(11111111111);

    axios.get("/product").then((res) => {
      console.log(res);
    });
  },
};
export const getters = {};
