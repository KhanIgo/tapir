<template>
  <footer class="row main-footer">
    <div class="container main-footer__container">
      <div class="main-footer__nav" v-for="nav in footerNavs" :key="nav.title">
        <Nav :nav="nav.items" :title="nav.title" />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import { useNavigationStore } from '@/stores/navigation'
  import Nav from '@/components/Footer/Nav.vue'
  const { footerNavs } = useNavigationStore()
</script>