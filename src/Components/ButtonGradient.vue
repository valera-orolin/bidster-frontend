<script setup>
const props = defineProps({
    text: String
});
</script>

<template>
    <button class="bg-transparent border-2 border-transparent rounded-2xl px-7 py-3 hover:text-my-aqua hover:shadow-my-aqua hover:shadow-inner transition duration-500 my-gradient-button">
        <span>{{ text }}</span>
    </button>
</template>

<style>
.my-gradient-button {
    background: 
      linear-gradient(theme('colors.my-black'), theme('colors.my-black')) padding-box,
      linear-gradient(224deg, theme('colors.primary2') 15%, theme('colors.primary3') 34%, theme('colors.primary4') 58%, theme('colors.primary5') 77%, theme('colors.primary2') 96%) border-box;
    display: inline-block;
}
</style>