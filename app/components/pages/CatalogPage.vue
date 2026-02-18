<template>
    <div class="row catalog-page">
        <div class="container catalog-page__container">
            <h1 class="catalog-page__title">Каталог</h1>
            <div class="catalog-page__products">
                <CatalogList :products="products" />
            </div>
            <div class="catalog-page__more">
                <LoadMore />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useProductsStore } from '@/stores/products'
import CatalogList from '@/components/Catalog/List.vue'
import LoadMore from '@/components/Catalog/LoadMore.vue'
import { computed } from 'vue'
const productsStore = useProductsStore()
const products = computed(() => productsStore.items)
</script>

<style lang="scss">
@use '@/assets/styles/vars' as *;
.catalog-page {
    padding: 100px 0 75px;
    @include tablet {
        padding: 80px 0 45px;
    }
    @include mobile {
        padding: 20px 0 25px;
    }
    &__container {
        flex-direction: column;
    }
    &__title {
        font-size: 42px;
        text-align: center;
        margin-bottom: 110px;
        text-transform: uppercase;
        @include tablet {
            font-size: 32px;
            margin-bottom: 80px;
        }
        @include mobile {
            font-size: 24px;
            margin-bottom: 35px;
        }
    }
    &__more {
        margin-top: 85px;
        @include tablet {
            margin-top: 55px;
        }
        @include mobile {
            margin-top: 20px;
        }
    }
}
</style>