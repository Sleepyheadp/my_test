<template>
  <div>Bar</div>
</template>

<script setup>
// 异步操作
const msg = setTimeout(() => {
  return 'Hello from Bar'
}, 2000)
console.log(msg)
</script>
<style scoped></style>
