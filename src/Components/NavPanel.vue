<script setup>
import ButtonGradient from '../Components/ButtonGradient.vue';
</script>

<template>
    <div class="bg-my-black flex items-center justify-between px-32 py-8">
        <router-link to="/lots">
            <img src="../assets/logo.svg" alt="Bidster" />
        </router-link>
        <div class="flex space-x-8 text-my-gray4 text-sm items-center font-ligh justify-end">
            <a href="#" class="hover:text-my-lila transition duration-500">Home</a>
            <a href="#" class="hover:text-my-lila transition duration-500">Pages</a>
            <a href="#" class="hover:text-my-lila transition duration-500">Feature</a>
            <a href="#" class="hover:text-my-lila transition duration-500">Cart</a>
            <ButtonGradient text="Sign in" />
        </div>
    </div>
</template>