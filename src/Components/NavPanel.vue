<script setup>
import ButtonGradient from '../Components/ButtonGradient.vue';
import { ref, onMounted } from 'vue';

const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
    <div class="bg-my-black flex items-center justify-between px-4 md:px-32 py-4 lg:py-6">
        <router-link to="/lots">
            <img src="../assets/logo.png" alt="Bidster" class="h-8"/>
        </router-link>

        <div class="lg:flex hidden space-x-8 text-my-gray4 text-base items-center font-ligh justify-end">
            <router-link to="/profile" class="hover:text-my-lila transition duration-500">Profile</router-link>
            <router-link to="/lots/create" class="hover:text-my-lila transition duration-500">Create Auction</router-link>
            <router-link to="/login">
                <ButtonGradient text="Sign in" />
            </router-link>
        </div>

        <div class="lg:hidden inline-flex items-center justify-center space-x-4">
            <router-link to="/login">
                <font-awesome-icon class="text-my-gray3" :icon="['fas', 'right-to-bracket']" />
            </router-link>
            <button @click="toggleMenu" data-collapse-toggle="navbar-hamburger" type="button" class="items-center justify-center p-2 w-10 h-10 text-sm text-my-gray3 rounded-lg focus:outline-none focus:ring-2 focus:ring-my-gray2" aria-controls="navbar-hamburger" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>
    </div>

    <div class="lg:hidden flex">
        <div id="menu" v-show="isOpen" class="absolute p-8 bg-my-gray2 border border-transparent text-my-gray3 rounded-2xl left-2 right-2 my-gradient-bord">
            <div class="space-y-6">
                <a href="#" class="flex">Home</a>
                <a href="#" class="flex">Pages</a>
                <a href="#" class="flex">Feature</a>
                <a href="#" class="flex">Cart</a>
            </div>
        </div>
    </div>
</template>