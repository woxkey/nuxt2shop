<template>
  <div class="app-header">
    <NuxtLink to="/">Logo</NuxtLink>
    <NuxtLink to="/cart">Cart</NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
