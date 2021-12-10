<template>
  <div class="hello">
    Hello Vue! this is a vue project from webpack build.
    <p>{{count}}</p>
    <p><button @click="add">add</button></p>
  </div>
</template>
<script>
export default {
  props: ['count', 'add']
};
</script>
