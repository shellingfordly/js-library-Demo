<template>
<div>{{aaa}}</div>
<ul>
  <li v-for="o in data">{{o}}</li>
</ul>
<Parent/>
</template>

<script setup lang="ts">
import Parent from '../views/slot2/Parent.vue'
import {watch, ref, watchEffect} from 'vue'

const aaa = ref('ssss')
const data = ref([1,2,3])

setTimeout(()=>{
  
  console.log('setTimeout');
  data.value.push(5)
  aaa.value = 'xxx'
},1000)

watch(data, (onChange)=>{
  console.log('watchEffect');
}, {deep: true})

</script>
