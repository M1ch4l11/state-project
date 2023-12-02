<template>
  <main>
    <div v-for="(item, index) in cartStore.products" :key="index">
      <img
        style="width: 35%"
        :alt="item.name"
        :src="require('../images/' + item.image)"
      />
      <h3>Price: {{ item.price }}</h3>
      <button @click="cartStore.addItem(item)">move to basket</button>
    </div>
  </main>
</template>
<script setup>
import { useCartStore } from "@/stores/useCartStore";
const cartStore = useCartStore();
</script>
