<script setup>
defineProps({
    message: {
        type: String,
    },
});
</script>

<template>
    <div v-show="message">
        <p class="text-sm tracking-widest text-my-lila">
            {{ message }}
        </p>
    </div>
</template>
