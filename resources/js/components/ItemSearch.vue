<template lang="pug">
search(v-model="query" @submit="onSubmit")
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import Search from "./Search.vue"
import { useRouter } from "vue-router";
import { useSearchStore } from "../store/search";

const query = ref('')
const router = useRouter()
const searchStore = useSearchStore()

watch(() => searchStore.state.query, (value) => query.value = value)

const onSubmit = () => {
    if (query.value.length == 0) {
        return;
    }

    router.push({
        name: 'Search',
        params: {
            query: query.value,
        }
    })
}
</script>
