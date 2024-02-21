<script setup>
const props = defineProps({
    text: String
});
</script>

<template>
    <button class="bg-my-lila px-8 py-3 rounded-2xl text-my-black hover:bg-my-black hover:text-my-gray4 border-my-lila border-0.5 transition duration-500">
        <span>{{ text }}</span>
    </button>
</template>