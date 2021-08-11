<template>
  <div>{{ modelValue }}</div>
  <button @click="emitValue">onChange</button>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    modelValue: String,
    modelModifiers: Object,
    msgModifiers: Object,
  },
  setup(props, { emit }) {
    console.log(props.modelValue);

    function emitValue() {
      let value = "  asdda  ";
      if (props.modelModifiers.upfirstword) {
        value = value.trim();
        value = value.charAt(0).toUpperCase() + value.slice(1);
      }
      this.$emit("update:modelValue", value);
    }

    console.log("props.modelModifiers", props.modelModifiers);
    console.log("props.msgModifiers", props.msgModifiers);
    
    
    function onChange() {
      emit("update:modelValue", "  asdda  ");
    }
    return { onChange, emitValue };
  },
});
</script>
