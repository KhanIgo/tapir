<template>
    <div class="catalog-list">
        <div class="catalog-list__item" v-for="product in props.products" :key="product.id">
            <ProductCard :product="product" />
        </div>
    </div>
</template>

<script setup lang="ts">
import ProductCard from '@/components/Catalog/ProductCard.vue'
import type { Product } from '@/types/product'

const props = defineProps<{
  products: Product[]
}>()
</script>

<style lang="scss">
.catalog-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: space-between;
    // flex-direction: column;
    // gap: 20px;
    
    &__item {
        width: 100%;
        max-width: 290px;
        display: flex;
        &:last-of-type {
            margin-right: auto;
        }
    }
}
</style>