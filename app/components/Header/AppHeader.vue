<template>
  <header class="row main-header">
    <div class="container main-header__container">
      <NuxtLink to="/" class="main-header__logo"></NuxtLink>
      <div class="main-header__nav">
        <Nav :nav="mainNav" />
      </div>
      <div class="main-header__burger">
        <Burger />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import Nav from '@/components/Header/Nav.vue'
import Burger from '@/components/Ui/Burger.vue'
import { NuxtLink } from '#components'
import { useNavigationStore } from '@/stores/navigation'

const { mainNav } = useNavigationStore()
</script>

<style lang="scss">
@use '@/assets/styles/vars' as *;
.main-header {
   
  &__container {
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    
    @include mobile {
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
  &__logo {
    aspect-ratio: 1/1;
    background-color: var(--colorRed);
    width: 42px;
    
    @include mobile {
      width: 28px;
    }
  }
  &__nav {
    margin-left: auto;
    margin-right: auto;
    @include tablet {
      display: none;
    }
  }
  &__burger {
    margin-left: auto;
    display: none;
    @include tablet {
      display: block;
    }
  }
}
</style>