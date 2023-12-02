<template>
  <!-- Cart Store -->
  <h1>Works</h1>
  <main>
    <div v-for="(item, index) in cartStore.products" :key="index">
      <h2>{{ item.name }}</h2>
      <img
        style="width: 35%"
        :src="'../image/' + item.image"
        :alt="item.name"
      />
      <h3>Price: {{ item.price }}</h3>
    </div>
  </main>
</template>
<script setup>
import { useCartStore } from "@/stores/useCartStore";
const cartStore = useCartStore();
</script>
