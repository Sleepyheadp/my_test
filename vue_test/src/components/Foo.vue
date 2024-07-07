<template>
  <div>
    <div>
      <!-- Foo -->
      <!-- <Bar></Bar> -->
      <a id="profile" href="">My Profile</a>
      <a href="" v-if="admin" id="admin">Admin</a>
      <ul href="" v-show="shouldShowDropdown" id="user-dropdown"></ul>
    </div>
  </div>
</template>

<script>
import Bar from './Bar.vue'
export default {
  components: {
    Bar
  },
  data() {
    return {
      admin: false,
      shouldShowDropdown: false
    }
  }
}
</script>
<style scoped></style>
