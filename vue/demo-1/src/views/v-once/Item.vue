<template>
  <div>{{ data[id] }}</div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  props: { id: String },
  setup(props) {
    const data = ref({});

    function getData(): Promise<Object> {
      return new Promise((res) => {
        setTimeout(() => {
          res({
            "1": "11111",
            "2": "22222",
            "3": "33333",
          });
        }, 1000);
      });
    }

    onMounted(async () => {
      data.value = await getData();
      console.log(props.id, data.value);
    });

    return { data };
  },
});
</script>
