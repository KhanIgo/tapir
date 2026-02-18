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

<style lang="scss" scoped>
@use '@/assets/styles/vars' as *;

.main-footer {
  background-color: black;
  &__container {
    // display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-top: 100px;
    padding-bottom: 100px;
    @include tablet {
      // padding-top: 50px;
      // padding-bottom: 50px;
      gap: 60px;
    }
    @include mobile {
      padding-top: 60px;
      padding-bottom: 60px;
    }
  }
  &__nav {
    width: 25%;
    @include tablet {
      width: calc(50% - 30px);
    }
    @include mobile {
      width: 100%;
    }
    // max-width: 250px;
  }
}
</style>