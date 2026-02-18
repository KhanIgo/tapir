<template>
    <TransitionGroup name="product" tag="div" class="catalog-list">
        <div class="catalog-list__item" v-for="product in props.products" :key="product.id">
            <ProductCard :product="product" />
        </div>
    </TransitionGroup>
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
        width: calc(25% - 22.5px);
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

.product-enter-active {
    transition: opacity 0.35s ease-out, transform 0.35s ease-out;
}
.product-enter-from {
    opacity: 0;
    transform: translateY(20px);
}
.product-enter-to {
    opacity: 1;
    transform: translateY(0);
}
.product-move {
    transition: transform 0.35s ease-out;
}
</style>