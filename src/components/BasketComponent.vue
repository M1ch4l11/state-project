<template>
  <div class="container">
    <h1>YOUR BASKET</h1>
    <h1>Total price: {{ cartStore.totalPrice }}€</h1>
    <button @click="cartStore.$reset()">Delete ALL</button>
    <div v-for="(item, index) in cartStore.basket" :key="index">
      <h2>{{ item.name }}</h2>
      <h3>Price: {{ item.price }}</h3>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/useCartStore";
const cartStore = useCartStore();
</script>

<style>
.container {
  margin: 12px;
  padding: 12px;
  border: 1px solid black;
  border-radius: 15px;
}
</style>
