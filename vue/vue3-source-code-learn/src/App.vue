<script setup>
import { effect, onMounted, reactive } from "vue";
import FormPage from "./components/FormPage.vue";

const count = $ref(1);
const count1 = $ref(1);

const doubleCount = $computed(() => count * 2);

const obj = reactive({
  a: 1,
  b: 2,
});

const fn = effect(
  () => {
    console.log("count", count);
    console.log("count1", count1);
  },
  { deep: true }
);
</script>

<template>
  <FormPage />
  <button @click="count++">add count</button>
  <button @click="count1++">add count1</button>
  <button @click="fn">effect</button>
</template>
