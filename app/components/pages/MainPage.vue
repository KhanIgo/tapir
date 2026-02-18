<template>
    <div class="main-page">
        <div class="container main-page__container">
            <h1 class="main-page__title">тестовое задание</h1>
            <NuxtLink to="/catalog" class="ui-btn_red main-page__link">В каталог</NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { NuxtLink } from '#components'
</script>

<style lang="scss">
.main-page {
    margin-top: auto;
    margin-bottom: auto;
    padding: 50px 0;
    &__container {
        flex-direction: column;
    }
    &__title {
        font-size: 64px;
        margin-bottom: 40px;
        text-transform: uppercase;
    }
    &__link {
        align-self: flex-start;
        // margin-top: 20px;
    }

}
</style>
