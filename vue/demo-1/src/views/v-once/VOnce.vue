<template>
  <div>
    <Item v-for="a in list" :key="a" :id="a" />
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import Item from "./Item.vue";

export default defineComponent({
  components: { Item },
  setup() {
    const list = reactive(["1", "2", "3"]);
    return { list };
  },
});
</script>
