<template>
  <div class="layout">
    <AppHeader />
    <main>
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { NuxtPage } from '#components'
import AppHeader from '@/components/Header/AppHeader.vue'
import AppFooter from '@/components/Footer/AppFooter.vue'
</script>

<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  width: 100%;
  flex-grow: 1;
  display: flex;
}
</style>