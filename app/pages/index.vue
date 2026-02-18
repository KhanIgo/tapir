<template>
  <MainPage />
</template>

<script setup lang="ts">
import { definePageMeta, useHead } from '#imports'
import MainPage from '@/components/pages/MainPage.vue'

definePageMeta({
  layout: 'default',
})

const title = 'Тестовое задание'
useHead({
  title,
})
</script>