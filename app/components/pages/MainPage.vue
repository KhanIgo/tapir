<template>
    <div class="row main-page">
        <div class="container main-page__container">
            <h1 class="main-page__title">тестовое <br class="mobile-only" />задание</h1>
            <NuxtLink to="/catalog" class="ui-btn_red main-page__link">В каталог</NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { NuxtLink } from '#components'
</script>

<style lang="scss">
@use '@/assets/styles/vars' as *;
.main-page {
    margin-top: auto;
    margin-bottom: auto;
    padding: 50px 0;
    
    @include mobile {
        padding: 200px 0;
    }
    &__container {
        flex-direction: column;
    }
    &__title {
        font-size: 64px;
        margin-bottom: 35px;
        text-transform: uppercase;
        @include tablet {
            font-size: 36px;
        }
        @include mobile {
            font-size: 26px;
        }
    }
    &__link {
        align-self: flex-start;
        // margin-top: 20px;
    }

}
</style>
