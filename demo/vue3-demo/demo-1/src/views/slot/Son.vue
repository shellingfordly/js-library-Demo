<template>
  <ul class="slotTodoChildren">
    <li class="lis" v-for="todo in todoList" v-bind:key="todo.id">
      <slot name="todo" :todos="todo">
        {{ todo.text }}
      </slot>
    </li>
  </ul>
</template>
<script>
export default {
  name: "Son",

  data() {
    return {
      todoList: [
        {
          id: 1,
          text: "扫地",
        },
        {
          id: 2,
          text: "做饭",
        },
        {
          id: 3,
          text: "擦桌子",
        },
      ],
    };
  },
  created() {
    console.log(this.filteredTodos);
  },
};
</script>
<style scoped>
.slotTodoChildren .lis {
  display: block;
  background: #434534;
  line-height: 40px;
  margin-top: 10px;
  color: #fff;
  font-size: 24px;
  height: 40px;
}
</style>
