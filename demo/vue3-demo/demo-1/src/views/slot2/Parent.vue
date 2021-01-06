<template>
  <div>
    <Son>
      <template #test="{data, other: otherMsg}">
        {{data}}--{{otherMsg}}
      </template>
    </Son>
  </div>
</template>
<script>
import Son from "./Son.vue";
export default {
  name: "Parent",
  components: {
    Son,
  },
  data() {
    return {
    };
  },
};
</script>
