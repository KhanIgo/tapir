import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Product, ProductsResponse } from '@/types/product'

const API_URL = 'https://test-task-api.tapir.ws/products'

export const useProductsStore = defineStore('products', () => {
  const items = ref<Product[]>([])
  const loading = ref(false)
  const total = ref(0)
  const totalPages = ref(0)
  const currentPage = ref(1)
  const limit = ref(10)

  function getUrl() {
    return `${API_URL}?page=${currentPage.value}&limit=${limit.value}`
  }

  function setData(response: ProductsResponse) {
    items.value = response.products
    total.value = response.total
    totalPages.value = response.totalPages
    currentPage.value = response.currentPage
    limit.value = response.limit
  }

  return { items, loading, total, totalPages, currentPage, limit, getUrl, setData }
})
