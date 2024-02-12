<script setup>
import NavPanel from '../Components/NavPanel.vue';
</script>

<template>
    <div class="flex h-screen">
        <div class="w-5/12 my-gradient p-10 pl-28 flex justify-start">
            <div class="relative">
                <img src="../assets/logo-dark.svg" alt="Bidster" />
                <div class="absolute bottom-0 left-0">
                    <img class="scale-150 translate-x-10 -translate-y-20" src="../assets/element1.svg" alt="" />
                    <img class="scale-180 transform translate-x-40 -translate-y-48" src="../assets/element2.svg" alt="" />
                </div>
            </div>
        </div>
        <div class="w-7/12 bg-my-black p-10 flex justify-between items-start relative">
            <div class="w-3/4">
                <div class="text-my-gray4 text-5xl font-bold mt-28 leading-tight">
                    Supercharge your financial analytics with
                    <span class="my-gradient-text">Bidster</span>
                </div>
                <div class="text-my-gray3 text-base font-light mt-10">
                    Unlock the future of financial decision-making with our AI-powered
                    analytics platform.
                </div>
            </div>
            <NavPanel class="absolute right-28 top-10" />
        </div>
    </div>
</template>
