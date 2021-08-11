<template>
  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <ComponentName />
  <Parent />
  <VModel /> -->
  <!-- <VOnce /> -->
  <!-- <Render /> -->
  <!-- <Computed /> -->
  <Setup />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ComponentName from "./components/ComponentName.vue";
import Parent from "./views/slot2/Parent.vue";
import VModel from "./views/v-model/VModel.vue";
import VOnce from "./views/v-once/VOnce.vue";
import Render from "./views/render/Render.vue";
import Computed from "./views/computed/Computed.vue";
import Setup from "./views/setup/Setup.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Parent,
    ComponentName,
    VModel,
    VOnce,
    Render,
    Computed,
    Setup,
  },
};
</script>
