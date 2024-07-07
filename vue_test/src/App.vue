<script setup>
import { ref } from 'vue'
// import Foo from './components/Foo.vue'
import Counter from './components/Counter.vue'
import Password from './components/Password.vue'
let num = ref(0)
let minLength = 10
function increase() {
  num.value++
  console.log('clicked', num)
}
</script>

<template>
  <!-- <Foo></Foo> -->
  <div>
    {{ num }}
    <Counter @increase="increase"></Counter>
    <Password :minLength="minLength"></Password>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
