<template>
  <div>
    <h2>Computed:</h2>
    <p>{{ count1 }}</p>
    <p>{{ count2 }}</p>
    <p>{{ count3 }}</p>
    <p>{{ count4(count1) }}</p>
    <button @click="count1 += 1">改变count1</button>
    <p>{{ obj }}</p>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, ref, watch } from "vue";

export default defineComponent({
  setup() {
    const count1 = ref(1);
    const count2 = ref("count2");
    // 而使用computed时，count1的改变不会影响count2
    const count3 = computed(() => {
      return count2.value;
    });
    // 使用返回方法的形式其实已经与普通的方法没有区别了，改变count1时会执行方法
    const count4 = computed(() => (data) => {
      console.log(data);
      return count2.value;
    });

    const obj = reactive({
      name: "Tom",
    });

    setTimeout(() => {
      // obj.age = 18;
    }, 1000);

    return { count1, count2, count3, count4, obj };
  },
});
</script>
