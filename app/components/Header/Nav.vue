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

<style lang="scss">
.main-nav {
    width: 100%;
    &__list {
        width: 100%;
        list-style: none;
        display: flex;
        gap: 20px;
    }
    &__item {
        padding: 0 13px;
    }
    &__link {
        text-decoration: none;
        font-size: 14px;
        color: black;    
        transition: 0.3s ease;
        display: flex;
        &:hover {
            transform: scale(1.1);
            // color: var(--colorRed);
        }
    }
}
</style>