<script setup>
import { onMounted, ref } from 'vue';

const model = defineModel({
    required: true,
});

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
    <textarea
        class="bg-my-gray2 text-sm p-5 resize-none focus:border-my-violet focus:bg-my-black focus:outline-none focus:ring-0.5 focus:ring-my-violet rounded-full transition duration-500"
        v-model="model"
        ref="input"
    />
</template>