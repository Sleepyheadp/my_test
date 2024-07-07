<template>
  <div>
    <div class="header">
      <!-- 默认插槽 -->
      <slot default></slot>
    </div>
    <div class="middle">
      <!-- 具名插槽 -->
      <slot name="middle"></slot>
    </div>
    <div class="footer">
      <!-- 作用域插槽 -->
      <slot :type="type" name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
let type = 'scoped'
</script>
<style scoped></style>
