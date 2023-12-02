<template>
  <!-- <BasicStateExample></BasicStateExample> -->
  <MediumStateExample></MediumStateExample>
  <BasketComponent></BasketComponent>
</template>
<script>
// import BasicStateExample from "@/components/BasicStateExample.vue";
import MediumStateExample from "@/components/MediumStateExample.vue";
import BasketComponent from "@/components/BasketComponent.vue";

export default {
  components: {
    // BasicStateExample,
    MediumStateExample,
    BasketComponent,
  },
};
</script>

<style>
#app {
  display: flex;
}
</style>
