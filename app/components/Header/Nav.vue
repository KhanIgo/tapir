<template>
    <nav class="main-nav">
        <ul class="main-nav__list">
            <li class="main-nav__item" v-for="item in props.nav" :key="item.name">
                <NuxtLink :to="item.to" class="main-nav__link">{{ item.name }}</NuxtLink>
            </li>
        </ul>
    </nav>
</template>
<script setup lang="ts">
import { NuxtLink } from '#components'
import type { NavItem } from '@/types/navigation'

const props = defineProps<{
    nav: NavItem[]
}>()
</script>