import { ref, computed } from "vue";
import { defineStore } from "pinia";
export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  const compereNumber = computed(() => count.value % 2 === 0);
  function increment() {
    count.value++;
  }
  function multiply() {
    count.value *= 2;
  }
  function $reset(options) {
    count.value = options?.resetCounter || 0;
  }
  return { count, doubleCount, increment, multiply, compereNumber, $reset };
});
