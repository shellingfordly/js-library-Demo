<template>
  <div class="app">
    <p>App</p>
    <Hello :count="count" :add="add" />
  </div>
</template>
<script>
import Hello from "./views/Hello.vue";
export default {
  name: "App",
  components: {
    Hello,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    add() {
      this.count++;
    },
  },
};
</script>
