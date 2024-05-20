<template>
  <div>
    <img class="product-image" :src="product.image" alt="image" />
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
}
</script>

<style scoped>
.product-image {
  max-width: 250px;
}
</style>
