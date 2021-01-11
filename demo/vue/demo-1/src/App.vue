<template>
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <ComponentName />
  <Parent/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ComponentName from './components/ComponentName.vue'
import Parent from './views/slot2/Parent.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,Parent,ComponentName
  }
}
</script>
