import { defineStore } from "pinia";
import products from "/Users/m1ch4l/VueProjects/state-project/product.json";
export const useCartStore = defineStore("cartStore", {
  state: () => ({
    products: products,
    basket: [],
    totalPrice: 0,
  }),
  actions: {
    addItem(item) {
      this.basket.push(item);
      this.totalPrice += item.price;
    },
    $reset() {
      this.basket = [];
      this.totalPrice = 0;
    },
  },
});
