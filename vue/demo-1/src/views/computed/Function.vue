<template>
  <div>
    <h2>Function:</h2>
    <p>{{ count1 }}</p>
    <p>{{ count2 }}</p>
    <p>{{ count3() }}</p>
    <button @click="count1 += 1">改变count1</button>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";

export default defineComponent({
  setup() {
    const count1 = ref("count1");
    const count2 = ref("count2");
    // 事实证明，使用方法的形式，count1改变时count3会被执行
    const count3 = () => {
      console.log(count1.value, count2.value);
      return count2.value;
    };

    return { count1, count2, count3 };
  },
});
</script>
