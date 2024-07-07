<template>
  <div>
    <input type="text" v-model="inputValue" />
    <div id="notice" v-if="error" data-test="error">words at least > {{ props.minLength }}</div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
const props = defineProps(['minLength'])
let inputValue = ref('')
const error = computed(() => {
  return inputValue.value.length < props.minLength && inputValue.value.length !== 0
})
</script>
<style scoped></style>
