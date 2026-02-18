<template>
    <div class="load-more">
        <button
            v-if="!productsStore.loading && productsStore.hasNextPage && !productsStore.error"
            class="ui-btn_bordered load-more__btn"
            @click="productsStore.loadMore()"
        >
            Показать ещё
        </button>
        <p v-if="productsStore.loading" class="load-more__loading">Загрузка...</p>
        <div v-if="productsStore.error" class="load-more__error">
            <p class="load-more__error-text">Произошла ошибка, попробуйте позже</p>
            <button class="ui-btn_bordered load-more__retry" @click="retry">Повторить</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useProductsStore } from '@/stores/products'

const productsStore = useProductsStore()

function retry() {
    productsStore.clearError()
    productsStore.loadMore()
}
</script>

<style lang="scss">
.load-more {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    padding: 24px 0;

    &__loading {
        color: black;
        font-size: 14px;
    }

    &__error {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
    }

    &__error-text {
        // color: var(--colorRed);
    }
}
</style>