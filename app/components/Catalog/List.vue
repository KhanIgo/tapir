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
@use '@/assets/styles/vars' as *;
.catalog-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: space-between;
    // flex-direction: column;
    // gap: 20px;
    
    &__item {
        // max-width: calc(33.333% - 20px);
        // max-width: 290px;
        width: calc(25% - 22.5px);
        // flex-grow: 1;
        display: flex;
        justify-content: center;
        @include tablet {
            width: calc(33.333% - 20px);
        }
        @include mobile {
            width: calc(50% - 15px);
        }
        &:last-of-type {
            margin-right: auto;
        }
    }
}
</style>