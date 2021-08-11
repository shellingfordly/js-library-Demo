<template>
  <div>生命周期</div>
</template>
<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUpdated,
} from "vue";

export default defineComponent({
  beforeCreate() {
    console.log("----- vue2: beforeCreate-----");
  },
  created() {
    console.log("----- vue2: created-----");
  },
  beforeUpdate() {
    console.log("----- vue2: beforeUpdate-----");
  },
  updated() {
    console.log("----- vue2: updated-----");
  },
  beforeMount() {
    console.log("----- vue2: beforeMount-----");
  },
  mounted() {
    console.log("----- vue2: mounted-----");
  },
  setup() {
    console.log("----- vue3: setup-----");

    onBeforeMount(() => {
      console.log("----- vue3: onBeforeMount-----");
    });

    onMounted(() => {
      console.log("----- vue3: onMounted-----");
    });

    onBeforeUpdate(() => {
      console.log("----- vue3: onBeforeUpdate-----");
    });

    onUpdated(() => {
      console.log("----- vue3: onUpdated-----");
    });

    onBeforeUnmount(() => {
      console.log("----- vue3: onBeforeUnmount-----");
    });

    return {};
  },
});
</script>
