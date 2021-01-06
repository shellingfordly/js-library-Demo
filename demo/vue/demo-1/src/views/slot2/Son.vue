<template>
  <div class="son">
    <slot name="test" v-bind="{...state}">
      {{ msg }}
    </slot>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Son",
  data() {
    return {
      state: {
        data: "我是子组件的数据",
        other: "其他数据",
        test: "测试数据",
      },
      msg: "我是子组件的默认数据",
    };
  },
});
</script>
<style scoped>
.son {
  font-size: 20px;
  color: red;
}
</style>
