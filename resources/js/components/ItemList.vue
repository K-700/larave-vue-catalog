<template lang="pug">
.item-list.row.row-cols-1.row-cols-md-3.g-4
    item-component(v-for="item in items" :key="item.id" :item="item")
// TODO: пагинация
</template>

<script setup lang="ts">
import type { Item } from "../../../graphql/generated";
import ItemComponent from "./Item.vue"

const props = defineProps<{
    items: Item[]
}>()
</script>
