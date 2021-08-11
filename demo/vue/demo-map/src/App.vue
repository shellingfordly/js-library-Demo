<template>
  <div>
    <Map />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Map from "./views/Map.vue";

export default defineComponent({
  components: { Map },
  setup() {
    return {};
  },
});
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
