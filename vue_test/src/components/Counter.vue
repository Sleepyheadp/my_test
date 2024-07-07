<template>
  <div>
    <button @click="handleClick">clickme</button>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'
const emit = defineEmits(['increase'])
let count = 1
const handleClick = () => {
  emit('increase', {
    count,
    remainder: count % 2 === 0
  })
  count++
}
</script>
<style scoped></style>
