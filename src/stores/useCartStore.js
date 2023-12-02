import { defineStore } from "pinia";
import products from "/Users/m1ch4l/VueProjects/state-project/product.json";
export const useCartStore = defineStore("cartStore", {
  state: () => ({
    products: products,
    kosik: [],
  }),
});
