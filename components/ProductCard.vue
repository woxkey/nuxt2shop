<template>
  <div class="product-card">
    <img class="product-image" :src="product.image" alt="image" />
    <div class="product-details">
      <div>{{ product.name }}</div>
      <div>{{ cost }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  computed: {
    cost() {
      return this.product.cost + ' Tg'
    },
  },
}
</script>

<style scoped>
.product-card {
  width: 100%;
  padding: 1rem;
  max-width: 300px;
}

.product-image {
  max-width: 300px;
}

.product-details {
  display: flex;
  justify-content: space-between;
}
</style>
