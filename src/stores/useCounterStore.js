import { defineStore } from "pinia";
export const useCounterStore = defineStore({
  id: "counter",
  state: () => {
    return { count: 0 };
  },
  getters: {
    doubleCount: (state) => state.count * 2,
    compereNumber: (state) => state.count % 2 === 0,
  },
  actions: {
    increment() {
      this.count++;
    },
    multiply() {
      this.count *= 2;
    },
    $reset(options) {
      this.count = options?.resetCounter || 0;
    },
  },
});
