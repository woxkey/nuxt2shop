<template>
  <div class="products-cards">
    <div>
      <ul class="categories-list">
        <li v-for="category in categories" :key="category.id">
          <NuxtLink :to="/products/ + category.name">{{
            category.name
          }}</NuxtLink>
        </li>
      </ul>
    </div>
    <div class="products">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Products',
  computed: {
    ...mapGetters({
      products: 'products/getProducts',
      categories: 'categories/getCategories',
    }),
  },
  created() {
    this.fetchProducts()
    this.fetchCategories()
    console.log()
  },
  methods: {
    ...mapActions({
      fetchProducts: 'products/fetchProducts',
      fetchCategories: 'categories/fetchCategories',
    }),
  },
}
</script>

<style scoped>
.products-cards {
  display: flex;
  padding-top: 50px;
  justify-content: space-between;
  gap: 30px;
}

.categories-list {
  list-style: none;
}

.categories-list {
  margin: 0;
  padding: 0;
}

.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
