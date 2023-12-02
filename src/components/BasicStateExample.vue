<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="../assets/logo.png"
      width="125"
      height="125"
    />
    <h1>{{ counter.count }}</h1>
    <button @click="counter.increment()">+</button>
    <button @click="counter.multiply()">*2</button>
    <button @click="counter.$reset({ nieco: 0 })">reset</button>
  </header>
</template>

<script setup>
import { useCounterStore } from "../stores/useCounterStore";
const counter = useCounterStore();
</script>
