<script setup>
const props = defineProps(["form"]);

console.log(props);
</script>

<template>
  <form>
    <slot :data="props" />
  </form>
</template>
