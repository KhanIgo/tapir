<template>
    <div class="product-card">
        <button class="ui-btn_fav product-card__fav-btn"></button>
        <NuxtLink to="#" class="product-card__thumb">
            <img :src="product.image" :alt="product.name" class="product-card__image">
        </NuxtLink>
        <NuxtLink to="#" class="product-card__price-split">
            <p class="product-card__price">
                {{ formatPrice(product.price) }} ₽
            </p>
            <p class="product-card__split">
                {{ formatPrice(splitPrice) }} ₽ × 2
            </p>
        </NuxtLink>
        <NuxtLink to="#" class="product-card__title">{{ product.name }}</NuxtLink>
    </div>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components';
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
@use '@/assets/styles/vars' as *;
a {
    text-decoration: none;
    color: inherit;
}
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
        transition: 0.3s ease;
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
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
        margin-top: 15px;
        @include mobile {
            margin-top: 5px;
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
        }
    }
    &__price {
        font-size: 24px;
        font-weight: 500;
    }
    &__split {
        font-size: 14px;
        font-weight: 500;
        color: white;
        background-color: black;
        line-height: 1em;
        padding: 3px 6px;
    }
    &__title {
        font-size: 16px;
        font-weight: 400;
        @include mobile {
            font-size: 12px;
            margin-top: 5px;
        }
    }

    &:hover {
        .product-card__thumb {
            transform: scale(1.05) translateY(-15px);
        }
    }
}
</style>