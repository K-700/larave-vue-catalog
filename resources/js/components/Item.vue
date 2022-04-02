<template lang="pug">
.col
    .item.card.h-100
        img.card-img-top(:src="item.image")
        .info.card-body
            h5.name.card-title {{ item.name }}
            p.description.card-text {{ item.description }}
            .price {{ item.price }}&nbsp;Р
        .card-footer
            small.marking.text-muted Артикул: {{ item.marking }}
</template>

<script setup lang="ts">
import type { Item } from "../../../graphql/generated";

const props = defineProps<{
    item: Item
}>()
</script>

<style lang="stylus" scoped>
.item
    .info
        .price
            color: #FF324D
            font-weight: 600
</style>
