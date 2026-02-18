<template>
  <div>
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { NuxtPage } from '#components'
import AppHeader from '@/components/Header/AppHeader.vue'
import AppFooter from '@/components/Footer/AppFooter.vue'
</script>