<script setup>
import { reactive, ref } from "vue";

const obj = {
  a: 1,
  b: 2,
};

const proxy1 = reactive(obj);
const proxy2 = reactive(obj);

console.log(proxy1 == proxy2);
console.log(proxy1 === proxy2);

const data = [
  {
    id: 1,
    value: "aaa",
  },
  {
    id: 2,
    value: "bbb",
  },
  {
    id: 3,
    value: "ccc",
  },
];

const allData = ref([]);
const showData = ref([]);

allData.value = data;
showData.value = data;

console.log("---------");
console.log(allData.value == showData.value);
console.log(allData.value === showData.value);

showData.value = allData.value.filter((v) => v.id < 2);

console.log(showData.value);
console.log(allData.value[0] === showData.value[0]);
</script>

<template></template>
