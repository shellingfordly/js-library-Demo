<template>
  <div>
    <todo-list>
      <template #todo="{ todos: list }">
        <div @click="type(todos.id)">
          {{ list.text }}
        </div>
      </template>
    </todo-list>
  </div>
</template>
<script>
import todoList from "./Son.vue";
export default {
  name: "Parent",
  components: {
    todoList,
  },
  data() {
    return {};
  },
  methods: {
    type(data) {
      console.log(data);
    },
  },
};
</script>
