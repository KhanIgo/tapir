<template>
    <div class="catalog-page">
        <div class="container catalog-page__container">
            <h1 class="catalog-page__title">Каталог</h1>
            <div class="catalog-page__products">
                <CatalogList :products="products" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useProductsStore } from '@/stores/products'
import CatalogList from '@/components/Catalog/List.vue'

const productsStore = useProductsStore()
const products = productsStore.items
</script>

<style lang="scss">
.catalog-page {
    padding: 50px 0;
    &__container {
        flex-direction: column;
    }
    &__title {
        font-size: 42px;
        text-align: center;
        margin-bottom: 40px;
        text-transform: uppercase;
    }
}
</style>