<template>
    <nav class="footer-nav">
        <h4 class="footer-nav__title">{{ props.title }}</h4>
        <ul class="footer-nav__list">
            <li class="footer-nav__item" v-for="item in props.nav" :key="item.name">
                <NuxtLink :to="item.to" class="footer-nav__link">{{ item.name }}</NuxtLink>
            </li>
        </ul>
    </nav>
</template>
<script setup lang="ts">
import { NuxtLink } from '#components'
import type { NavItem } from '@/types/navigation'

const props = defineProps<{
    title: string,
    nav: NavItem[]
}>()
</script>