<script setup>
const props = defineProps({
    text: String
});
</script>

<template>
    <button class="bg-my-gray3 px-8 py-3 rounded-2xl text-my-black hover:bg-my-lila hover:text-my-gray4 transition duration-500">
        <span>{{ text }}</span>
    </button>
</template>