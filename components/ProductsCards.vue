<template>
  <div>
    <div v-for="product in products" :key="product.id" class="products">
      <ProductCard :product="product" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ProductsCards',
  computed: {
    products() {
      return this.$store.state.products.list
    },
  },
  created() {
    this.fetchProducts()
  },
  methods: {
    ...mapActions({
      fetchProducts: 'products/fetchProducts',
    }),
  },
}
</script>
