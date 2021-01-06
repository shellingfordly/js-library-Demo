<template>
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <Parent/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Parent from './views/slot2/Parent.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,Parent
  }
}
</script>
