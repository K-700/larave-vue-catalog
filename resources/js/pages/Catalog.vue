<template lang="pug">
h1(v-if="group") {{ group.name }}
h4(v-if="totalItems") Всего товаров: {{ totalItems }}
item-list(v-if="items" :items="items")
</template>

<script lang="ts" setup>
import type { Group } from "../../../graphql/generated";
import { useGroupQuery } from "../../../graphql/generated";
import { toRefs } from "vue";
import { useResult } from "@vue/apollo-composable";
import ItemList from "../components/ItemList.vue";


const props = defineProps<{
    id: Group['id']
}>()
const { id } = toRefs(props)

const { result, loading, error } = useGroupQuery({
    id: id.value,
    itemsFirst: 30,
    // TODO: пагинация
    itemsPage: 1,
})

const group = useResult(result, null, data => data.group)
const items = useResult(result, null, data => data.group.items.data)
const totalItems = useResult(result, null, data => data.group.items.paginatorInfo.total)
</script>
