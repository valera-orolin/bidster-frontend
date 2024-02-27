<script setup>
import { onMounted, ref } from 'vue';

const model = defineModel({
    required: true,
});

const input = ref(null);

const props = defineProps({
    colorsInversed: {
        type: Boolean,
        default: false
    }
})

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
    <input
        :class="[
            'text-base p-5 rounded-full transition duration-500',
            props.colorsInversed ? 
            'bg-my-black focus:border-my-violet focus:outline-none focus:ring-0.5 focus:ring-my-violet' : 
            'bg-my-gray2 focus:border-my-violet focus:bg-my-black focus:outline-none focus:ring-0.5 focus:ring-my-violet'
        ]"
        v-model="model"
        ref="input"
    />
</template>