<template>
    <CatalogPage />
</template>

<script setup lang="ts">
import { definePageMeta, useHead, useFetch } from '#imports'
import CatalogPage from '@/components/pages/CatalogPage.vue'
import { useProductsStore } from '@/stores/products'
import type { ProductsResponse } from '@/types/product'

definePageMeta({
  layout: 'default',
})

useHead({
  title: 'Каталог',
})

const productsStore = useProductsStore()
const { data } = await useFetch<ProductsResponse>(productsStore.getUrl())
if (data.value) {
  productsStore.setData(data.value)
}
</script>
