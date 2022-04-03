<template lang="pug">
h1 Результат поиска по запросу "{{ query }}"
h4(v-if="itemPaginator") Всего товаров: {{ itemPaginator.paginatorInfo.total }}
item-list(v-if="itemPaginator" :items="itemPaginator.data")
</template>

<script lang="ts" setup>
import { computed, toRefs, watchEffect } from "vue";
import ItemList from "../components/ItemList.vue";
import { useSearchStore } from "../store/search";
import { MutationType } from "../models/store/mutation-type/MutationType";

const searchStore = useSearchStore()

const props = defineProps<{
    query: string
}>()
const { query } = toRefs(props)

watchEffect(() => searchStore.action(MutationType.search.loadItems, {
    query,
    first: 30,
    // TODO: пагинация
    page: 1,
}))
const itemPaginator = computed(() => searchStore.state.itemPaginator)
</script>
