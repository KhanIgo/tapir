import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Product, ProductsResponse } from '@/types/product'

const API_URL = 'https://test-task-api.tapir.ws/products'

export const useProductsStore = defineStore('products', () => {
  const items = ref<Product[]>([])
  const loading = ref(false)
  const error = ref(false)
  const total = ref(0)
  const totalPages = ref(0)
  const currentPage = ref(1)
  const limit = ref(10)

  const hasNextPage = computed(() => currentPage.value < totalPages.value)

  function getUrl(page?: number) {
    const p = page ?? currentPage.value
    return `${API_URL}?page=${p}&limit=${limit.value}`
  }

  function setData(response: ProductsResponse) {
    items.value = response.products
    total.value = response.total
    totalPages.value = response.totalPages
    currentPage.value = response.currentPage
    limit.value = response.limit
    error.value = false
  }

  function appendData(response: ProductsResponse) {
    items.value = [...items.value, ...response.products]
    total.value = response.total
    totalPages.value = response.totalPages
    currentPage.value = response.currentPage
    limit.value = response.limit
    error.value = false
  }

  function clearError() {
    error.value = false
  }

  async function loadMore() {
    if (loading.value || !hasNextPage.value) return
    loading.value = true
    error.value = false
    try {
      const nextPage = currentPage.value + 1
      const response = await $fetch<ProductsResponse>(getUrl(nextPage))
      appendData(response)
    } catch {
      error.value = true
    } finally {
      loading.value = false
    }
  }

  return {
    items,
    loading,
    error,
    total,
    totalPages,
    currentPage,
    limit,
    hasNextPage,
    getUrl,
    setData,
    appendData,
    clearError,
    loadMore,
  }
})
