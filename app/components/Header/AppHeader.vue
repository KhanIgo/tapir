<template>
  <header class="row main-header">
    <div class="container main-header__container">
      <div class="main-header__logo"></div>
      <div class="main-header__nav">
        <Nav :nav="mainNav" />
      </div>
    </div>
    <div class="main-header__burger">
      <Burger />
    </div>
  </header>
</template>

<script setup lang="ts">
import Nav from '@/components/Header/Nav.vue'
import Burger from '@/components/Ui/Burger.vue'

import { useNavigationStore } from '@/stores/navigation'

const { mainNav } = useNavigationStore()
</script>

<style lang="scss">
.main-header {
   
  &__container {
    // display: flex;
    // justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  &__logo {
    aspect-ratio: 1/1;
    background-color: var(--colorRed);
    width: 42px;
  }
  &__nav {
    margin-left: auto;
    margin-right: auto;
  }
  &__burger {
    // margin-left: auto;
    display: none;
  }
}
</style>