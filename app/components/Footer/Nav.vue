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

<style lang="scss">
.footer-nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    &__list {
        width: 100%;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    &__title {
        font-size: 14px;
        font-weight: 400;
        color: var(--colorGrey);
        // margin-bottom: 20px;
    }
    &__item {
        // padding: 0 13px;
    }
    &__link {
        text-decoration: none;
        font-size: 14px;
        color: white;
        transition: 0.3s ease;
        display: flex;
        &:hover {
            transform: translateX(0.5em);
        }
    }
}
</style>