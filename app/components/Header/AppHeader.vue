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