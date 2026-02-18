<template>
    <div class="product-card">
        <button class="ui-btn_fav product-card__fav-btn"></button>
        <div class="product-card__thumb">
            <img :src="product.image" :alt="product.name" class="product-card__image">
        </div>
        <div class="product-card__price-split">
            <p class="product-card__price">
                {{ formatPrice(product.price) }} ₽
            </p>
            <div class="product-card__split">
                {{ formatPrice(splitPrice) }} ₽ × 2
            </div>
        </div>
        <h3 class="product-card__title">{{ product.name }}</h3>
    </div>
</template>

<script setup lang="ts">
import type { Product } from '@/types/product'
import { computed } from 'vue'

const props = defineProps<{
  product: Product
}>()

function formatPrice(price: number): string {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

const splitPrice = computed(() => {
  return Math.ceil(props.product.price / 2)
})
</script>

<style lang="scss">
.product-card {
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    // height: 100%;
    
    &__fav-btn{
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 1;
    }
     

    &__thumb {
        aspect-ratio: 29/18;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }
    &__price-split {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__price {
        font-size: 24px;
        font-weight: 500;
    }
    &__split {
        font-size: 14px;
        color: var(--colorGrey);
    }
    &__title {
        font-size: 16px;
        font-weight: 400;
    }
}
</style>