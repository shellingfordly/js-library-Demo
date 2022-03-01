<script setup>


const props = defineProps(['form'])
console.log(props);

</script>

<template>
  <div>
    <slot />
  </div>
</template>
