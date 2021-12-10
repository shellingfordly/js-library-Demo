<template>
  <Item v-model.upfirstword="data.value" v-model:msg.f="data.value" />
</template>
<script lang="ts">
import { defineComponent, reactive, watch } from "vue";
import Item from "./Item.vue";

export default defineComponent({
  components: { Item },
  setup() {
    const data = reactive({
      msg: "msg",
      value: "   value  ",
    });

    watch(
      data,
      (newData) => {
        console.log(newData.value);
      },
      { deep: true }
    );
    return { data };
  },
});
</script>
