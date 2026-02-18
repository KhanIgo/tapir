<template>
    <div class="burger">
        <div class="burger__line"></div>
        <div class="burger__line"></div>
        <div class="burger__line"></div>
    </div>
</template>
<script setup lang="ts">
</script>

<style lang="scss" scoped>
@use '@/assets/styles/vars' as *;
.burger {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    aspect-ratio: 1/1;
    width: 40px;
    background-color: var(--colorLightGrey);
    padding: 14px 12px;
    cursor: pointer;
    &__line {
        width: 100%;
        height: 2px;
        background-color: black;
    }
}
</style>