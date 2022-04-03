<template lang="pug">
form.d-flex(@submit.prevent="emit('submit')")
    input.form-control.me-2(
        type="search"
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
        aria-label="Поиск"
    )
    button.btn.btn-outline-success(type="submit") Поиск
</template>

<script lang="ts" setup>
import { toRefs } from "vue";

const props = withDefaults(
    defineProps<{
        modelValue?: string,
        placeholder?: string,
    }>(),
    {
        modelValue: '',
        placeholder: 'Поиск',
    }
)
const { modelValue, placeholder } = toRefs(props)

const emit = defineEmits<{
    (e: 'submit'): void
    (e: 'update:modelValue', value: string): void
}>()
</script>
